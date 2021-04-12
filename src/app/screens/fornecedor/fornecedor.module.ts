import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';

import { ComponentsModule } from '../../components/components.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';


@NgModule({
  declarations: [FornecedorComponent, FornecedorComponent, FornecedorCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    MatGridListModule
  ],
  exports: [
    FornecedorComponent
  ]
})
export class FornecedorModule { }
