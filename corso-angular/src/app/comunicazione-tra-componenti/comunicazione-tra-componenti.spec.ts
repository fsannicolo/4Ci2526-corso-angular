import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicazioneTraComponenti } from './comunicazione-tra-componenti';

describe('ComunicazioneTraComponenti', () => {
  let component: ComunicazioneTraComponenti;
  let fixture: ComponentFixture<ComunicazioneTraComponenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicazioneTraComponenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicazioneTraComponenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
