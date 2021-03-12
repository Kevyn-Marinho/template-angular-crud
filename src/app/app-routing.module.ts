import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AutenticacaoComponent } from './templates/autenticacao/autenticacao.component';
import { HomeComponent } from './templates/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'produtos', pathMatch: 'full'},
      { path: 'produtos', component: ProdutosComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AutenticacaoComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
