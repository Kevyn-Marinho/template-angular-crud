import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  url = environment.autenticacaoUrl;

  constructor(private http: HttpClient, private router: Router) { }

  Autenticar(usuario: string, senha: string) {
    let token = "Basic " + btoa(usuario + ":" + senha);

    let headers = {
      headers: new HttpHeaders(
        {
          'Authorization': token,
        })
    };

    return this.http.post(this.url, {}, headers)
      .toPromise()
      .then((retorno: any)=> {

        if (retorno && retorno.success)
          window.localStorage.setItem("token", token);

          return retorno;
      })
  }

  Logout() {
    window.localStorage.setItem('token', '');
    this.router.navigate(['login'])
  }

}
