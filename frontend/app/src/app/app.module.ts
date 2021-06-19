import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { MasinovodjaComponent } from './masinovodja/masinovodja.component';
import { KorisnikSistemaComponent } from './korisnik-sistema/korisnik-sistema.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';

@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    MasinovodjaComponent,
    KorisnikSistemaComponent,
    AzuriranjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
