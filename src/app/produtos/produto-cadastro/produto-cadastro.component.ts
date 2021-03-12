import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  @Input() produto: Produto;
  @Input() remover: Function;
  @Output() produtoChange = new EventEmitter<Produto>();
  @Output() produtoAdicionado = new EventEmitter<Produto>();
  @Output() produtoRemovido = new EventEmitter<number>();
  @Output() close = new EventEmitter<boolean>();

  mensagem: string = '';
  sucesso: boolean = true;

  ngOnInit(): void { }

  constructor(
    private _service: ProdutosService) {
    this.produto = new Produto(0, "", 0, "");
    this.remover = () => { };
  }

  Salvar() {

    this.resumePromisse(this._service.update(this.produto), 'Salvo com sucesso!')
  }

  Adicionar() {
    this.resumePromisse(this._service.add(this.produto), 'Salvo com sucesso!',
    (ret: any) => this.produtoAdicionado.emit(ret));
  }

  Remover() {
    this.resumePromisse(this._service.delete(this.produto), 'Removido com sucesso!',
      () => this.produtoRemovido.emit(this.produto.id));
  }

  Limpar() {
    this.produto = new Produto(0, "", 0, "");
    this.produtoChange.emit(this.produto);
  }

  closeModal() {
    this.close.emit(true);
  }

  converterImagem(event: any) {
    const reader = new FileReader();
    const imagem = event.target.files[0];

    reader.readAsDataURL(imagem);
    reader.onload = () => {
      this.produto.imagem = reader.result?.toString() ?? '';
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
