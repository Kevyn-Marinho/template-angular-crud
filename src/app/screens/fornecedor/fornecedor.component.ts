import { Component, OnInit } from '@angular/core';

import { Fornecedor } from '../../models/fornecedor';
import { FornecedorService } from '../../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedores: Fornecedor[];
  fornecedorSelecionado: Fornecedor;
  _service: FornecedorService;
  mensagem: string = '';
  open: boolean = false;

  constructor(service: FornecedorService) {
    this.fornecedores = [];
    this._service = service;
    this.fornecedorSelecionado = new Fornecedor(0, "", 0, "");
    this.mensagem = '';

    this._service.getProducts()
      .then((resp) => this.fornecedores = resp)
      .catch(err => this.mensagem = err.error.title);
  }

  remover(id: any){
    console.log(id);

    this.fornecedores = this.fornecedores.filter(e => e.id != id);
  }

  adicionar(event : Fornecedor){
    this.fornecedores.push(event);
  }

  selecionar(produto: Fornecedor) {
    this.fornecedorSelecionado = new Fornecedor(0, "", 0, "");
    this.fornecedorSelecionado  = produto;
    this.open = true;
  }

  close(close: boolean) {
    this.open = !close;
  }

  showMessage(mensagem: string) {
    this.mensagem = mensagem;
    setTimeout(() => this.mensagem = '', 5000);
  }

  ngOnInit(): void {
  }

}
