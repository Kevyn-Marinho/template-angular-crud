import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  Sair() {
    this.service.Logout();
  }

  navigate(redirect: string){
    this.router.navigate([redirect])
  }

}
