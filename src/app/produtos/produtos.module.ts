import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';

import { ComponentsModule } from '../components/components.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';


@NgModule({
  declarations: [ProdutosComponent, ProdutosComponent, ProdutoCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    MatGridListModule
  ],
  exports: [
    ProdutosComponent
  ]
})
export class ProdutosModule { }
