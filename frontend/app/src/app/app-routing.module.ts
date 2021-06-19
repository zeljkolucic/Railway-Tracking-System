import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzuriranjeComponent } from './azuriranje/azuriranje.component';
import { KorisnikSistemaComponent } from './korisnik-sistema/korisnik-sistema.component';
import { MasinovodjaComponent } from './masinovodja/masinovodja.component';
import { PrijavaComponent } from './prijava/prijava.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'prijava', component: PrijavaComponent},
  {path: 'masinovodja', component: MasinovodjaComponent},
  {path: 'korisnikSistema', component: KorisnikSistemaComponent},
  {path: 'azuriranje', component: AzuriranjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
