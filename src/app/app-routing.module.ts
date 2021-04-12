import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorComponent } from './screens/fornecedor/fornecedor.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './screens/login/login.component';
import { ProdutosComponent } from './screens/produtos/produtos.component';
import { AutenticacaoComponent } from './templates/autenticacao/autenticacao.component';
import { HomeComponent } from './templates/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'produtos', component: ProdutosComponent},
      { path: 'fornecedor', component: FornecedorComponent}
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
