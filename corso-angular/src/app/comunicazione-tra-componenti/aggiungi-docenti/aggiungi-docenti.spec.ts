import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiDocenti } from './aggiungi-docenti';

describe('AggiungiDocenti', () => {
  let component: AggiungiDocenti;
  let fixture: ComponentFixture<AggiungiDocenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiDocenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiDocenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
