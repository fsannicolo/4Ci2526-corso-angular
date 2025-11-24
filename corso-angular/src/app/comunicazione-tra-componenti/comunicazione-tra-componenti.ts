import { Component, signal, WritableSignal } from '@angular/core';
import { VisualizzaElenco } from './visualizza-elenco/visualizza-elenco';
import { IDocente } from '../classi-interfacce/i-docente';

@Component({
  selector: 'app-comunicazione-tra-componenti',
  imports: [VisualizzaElenco],
  templateUrl: './comunicazione-tra-componenti.html',
  styleUrl: './comunicazione-tra-componenti.css'
})
export class ComunicazioneTraComponenti {
  docenti: WritableSignal<IDocente[]> = signal([]);

  aggiungiDocenti(): void {
    this.docenti.set([
      {id: 1, cognome: 'Boschi', nome: 'Luca', classi: [], materie: []},
      {id: 2, cognome: 'Festi', nome: 'Claudo', classi: [], materie: []},
      {id: 3, cognome: 'Trentini', nome: 'Andrea', classi: [], materie: []},
      {id: 4, cognome: 'Sannicolò', nome: 'Federico', classi: [], materie: []},
      {id: 5, cognome: 'Tairovski', nome: 'Denis', classi: [], materie: []},
    ])
  }
}
