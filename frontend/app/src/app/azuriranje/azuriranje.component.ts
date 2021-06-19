import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voz } from '../models/voz';
import { VozService } from '../voz.service';

@Component({
  selector: 'app-azuriranje',
  templateUrl: './azuriranje.component.html',
  styleUrls: ['./azuriranje.component.css']
})
export class AzuriranjeComponent implements OnInit {

  constructor(private vozService: VozService, private router: Router) { }

  ngOnInit(): void {
    this.voz = JSON.parse(localStorage.getItem('voz'));
  }

  voz: Voz;
  geografskaDuzina: string;
  geografskaSirina: string;

  potvrdi() {
    this.vozService.azuriraj(this.voz.naziv, this.geografskaDuzina, this.geografskaSirina).subscribe((res) => {
      
    })
    this.router.navigate(['masinovodja']);
  }


}
