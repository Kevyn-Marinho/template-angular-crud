import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = environment.url;

  headers = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        "Authorization": window.localStorage.getItem('token')?.toString() ?? ''
      })
  }
    ;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Produto[]>(this.url + "?limit=10&offset=1", this.headers).toPromise();
  }

  update(produto: Produto) {
    return this.http.put(this.url, JSON.stringify(produto), this.headers).toPromise();
  }

  add(produto: Produto) {
    return this.http.post(this.url, JSON.stringify(produto), this.headers).toPromise();
  }

  delete(produto: Produto) {
    return this.http.delete(this.url + '/' + produto.id, this.headers).toPromise();
  }
}
