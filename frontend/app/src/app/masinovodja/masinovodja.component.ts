import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Voz } from '../models/voz';
import { VozService } from '../voz.service';

@Component({
  selector: 'app-masinovodja',
  templateUrl: './masinovodja.component.html',
  styleUrls: ['./masinovodja.component.css']
})
export class MasinovodjaComponent implements OnInit {

  constructor(private vozService: VozService, private router: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.dohvatiSveVozove();
  }

  korisnik: Korisnik;
  vozovi: Voz[];

  dohvatiSveVozove() {
    this.vozService.dohvatiSveVozove().subscribe((vozovi: Voz[]) => {
      this.vozovi = vozovi;
    })
  }

  moguceAzurirati(voz: Voz) {
    return voz.masinovodja == this.korisnik.korisnickoIme;
  }

  azuriraj(voz: Voz) {
    localStorage.setItem('voz', JSON.stringify(voz));
    this.router.navigate(['azuriranje']);
  }

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

}
