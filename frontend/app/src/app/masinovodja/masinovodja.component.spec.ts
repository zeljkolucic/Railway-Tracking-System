import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasinovodjaComponent } from './masinovodja.component';

describe('MasinovodjaComponent', () => {
  let component: MasinovodjaComponent;
  let fixture: ComponentFixture<MasinovodjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasinovodjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasinovodjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
