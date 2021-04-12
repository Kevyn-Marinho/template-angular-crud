import { Component, OnInit } from '@angular/core';

import { Produto } from '../../models/produto';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[];
  produtoSelecionado: Produto;
  _service: ProdutosService;
  mensagem: string = '';
  open: boolean = false;

  constructor(service: ProdutosService) {
    this.produtos = [];
    this._service = service;
    this.produtoSelecionado = new Produto(0, "", 0, "");
    this.mensagem = '';

    this._service.getProducts()
      .then((resp) => this.produtos = resp)
      .catch(err => this.mensagem = err.error.title);
  }

  remover(id: any){
    console.log(id);

    this.produtos = this.produtos.filter(e => e.id != id);
  }

  adicionar(event : Produto){
    this.produtos.push(event);
  }

  selecionar(produto: Produto) {
    this.produtoSelecionado = new Produto(0, "", 0, "");
    this.produtoSelecionado = produto;
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
