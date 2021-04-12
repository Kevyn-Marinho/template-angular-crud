import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { LoginModule } from './login/login.module';
import { ProdutosModule } from './produtos/produtos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FornecedorModule,
    LoginModule,
    ProdutosModule
  ],
  exports: [
    FornecedorModule,
    LoginModule,
    ProdutosModule
  ]
})
export class ScreensModule { }
