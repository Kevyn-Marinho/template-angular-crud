import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './templates/home/home.component';
import { ScreensModule } from './screens/screens.module';
import { AutenticacaoComponent } from './templates/autenticacao/autenticacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutenticacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ScreensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
