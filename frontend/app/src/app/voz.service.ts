import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VozService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  dohvatiSveVozove() {
    return this.http.get(`${this.uri}/voz/dohvatiSveVozove`);
  }

  azuriraj(naziv, geografskaDuzina, geografskaSirina) {
    const podaci = {
      naziv: naziv,
      geografskaDuzina: geografskaDuzina,
      geografskaSirina: geografskaSirina
    }
    return this.http.post(`${this.uri}/voz/azuriraj`, podaci);
  }
}
