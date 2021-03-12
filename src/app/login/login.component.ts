import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  mensagem = '';

  constructor(
    private service: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Autenticar() {
    this.service.Autenticar(this.usuario, this.senha)
      .then((retorno: any) => {
        if (retorno && retorno.error) {
          this.mensagem = retorno.error;
          return;
        }

        this.router.navigate(['']);
        return;
      })
      .catch(err => this.mensagem = err);
  }

}
