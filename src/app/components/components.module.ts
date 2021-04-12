import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ProdutoComponent } from './produto/produto.component';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [ProdutoComponent, HeaderComponent, CardListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    ProdutoComponent,
    HeaderComponent,
    CardListComponent]
})
export class ComponentsModule { }
