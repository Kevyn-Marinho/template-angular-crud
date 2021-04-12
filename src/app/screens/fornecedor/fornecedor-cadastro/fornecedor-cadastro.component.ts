import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-cadastro',
  templateUrl: './fornecedor-cadastro.component.html',
  styleUrls: ['./fornecedor-cadastro.component.css']
})
export class FornecedorCadastroComponent implements OnInit {

  @Input() fornecedor: Fornecedor;
  @Input() remover: Function;
  @Output() fornecedorChange = new EventEmitter<Fornecedor>();
  @Output() fornecedorAdicionado = new EventEmitter<Fornecedor>();
  @Output() fornecedorRemovido = new EventEmitter<number>();
  @Output() close = new EventEmitter<boolean>();

  mensagem: string = '';
  sucesso: boolean = true;

  ngOnInit(): void { }

  constructor(
    private _service: FornecedorService) {
    this.fornecedor = new Fornecedor(0, "", 0, "");
    this.remover = () => { };
  }

  Salvar() {

    this.resumePromisse(this._service.update(this.fornecedor), 'Salvo com sucesso!')
  }

  Adicionar() {
    this.resumePromisse(this._service.add(this.fornecedor), 'Salvo com sucesso!',
    (ret: any) => this.fornecedorAdicionado.emit(ret));
  }

  Remover() {
    this.resumePromisse(this._service.delete(this.fornecedor), 'Removido com sucesso!',
      () => this.fornecedorRemovido.emit(this.fornecedor.id));
  }

  Limpar() {
    this.fornecedor = new Fornecedor(0, "", 0, "");
    this.fornecedorChange.emit(this.fornecedor);
  }

  closeModal() {
    this.close.emit(true);
  }

  converterImagem(event: any) {
    const reader = new FileReader();
    const imagem = event.target.files[0];

    reader.readAsDataURL(imagem);
    reader.onload = () => {
      this.fornecedor.imagem = reader.result?.toString() ?? '';
    };
  }

  resumePromisse(promise: Promise<any>, mensagem: string, callback: Function = () => { }) {
    promise
      .then(ret => callback(ret))
      .then(() => this.sucesso = true)
      .then(() => this.showMessage(mensagem))
      .catch((err) => {
        this.sucesso = false;
        this.showMessage(err.error.title);
      })
  }

  showMessage(mensagem: string) {
    this.mensagem = mensagem;
    setTimeout(() => this.mensagem = '', 5000);
  }

}
