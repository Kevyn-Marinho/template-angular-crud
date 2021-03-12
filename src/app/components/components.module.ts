import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ProdutoComponent } from './produto/produto.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ProdutoComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    ProdutoComponent,
    HeaderComponent]
})
export class ComponentsModule { }
