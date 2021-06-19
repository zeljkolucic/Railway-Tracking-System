import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
    
  }

  korisnickoIme: string;
  lozinka: string;
  tip: string;
  greska: string;

  prijava() {
    this.korisnikService.prijava(this.korisnickoIme, this.lozinka, this.tip).subscribe((korisnik: Korisnik) => {
      if(korisnik != null) {
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));
        if(korisnik.tip == 'masinovodja'){
          this.router.navigate(['masinovodja']);
        } else if(korisnik.tip == 'korisnikSistema') {
          this.router.navigate(['korisnikSistema']);
        }
      } else {
        this.greska = 'Uneli ste pogresne podatke!';
      }
    })
  }

}
