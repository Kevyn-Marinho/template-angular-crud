import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '../models/fornecedor';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
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
    return this.http.get<Fornecedor[]>(this.url + "?limit=10&offset=1", this.headers).toPromise();
  }

  update(produto: Fornecedor) {
    return this.http.put(this.url, JSON.stringify(produto), this.headers).toPromise();
  }

  add(produto: Fornecedor) {
    return this.http.post(this.url, JSON.stringify(produto), this.headers).toPromise();
  }

  delete(produto: Fornecedor) {
    return this.http.delete(this.url + '/' + produto.id, this.headers).toPromise();
  }
}
