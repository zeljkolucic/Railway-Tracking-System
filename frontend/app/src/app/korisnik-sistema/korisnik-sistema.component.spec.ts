import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikSistemaComponent } from './korisnik-sistema.component';

describe('KorisnikSistemaComponent', () => {
  let component: KorisnikSistemaComponent;
  let fixture: ComponentFixture<KorisnikSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
