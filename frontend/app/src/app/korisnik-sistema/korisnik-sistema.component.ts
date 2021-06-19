import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Voz } from '../models/voz';
import { VozService } from '../voz.service';

@Component({
  selector: 'app-korisnik-sistema',
  templateUrl: './korisnik-sistema.component.html',
  styleUrls: ['./korisnik-sistema.component.css']
})
export class KorisnikSistemaComponent implements OnInit {

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

  odjaviSe() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['prijava']);
  }

}
