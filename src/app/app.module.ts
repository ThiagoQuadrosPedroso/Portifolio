import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MenuComponent } from './pages/portfolio/menu/menu.component';
import { CabecalhoComponent } from './pages/portfolio/cabecalho/cabecalho.component';
import { SobreComponent } from './pages/portfolio/sobre/sobre.component';
import { ProjetosComponent } from './pages/portfolio/projetos/projetos.component';
import { PiadasComponent } from './pages/repositorio/piadas/piadas.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MenuComponent,
    CabecalhoComponent,
    SobreComponent,
    ProjetosComponent,
    PiadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
