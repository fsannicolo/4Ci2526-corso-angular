import { Component, output } from '@angular/core';
import { IDocente } from '../../classi-interfacce/i-docente';

@Component({
  selector: 'app-aggiungi-docenti',
  imports: [],
  templateUrl: './aggiungi-docenti.html',
  styleUrl: './aggiungi-docenti.css'
})
export class AggiungiDocenti {

  onNuoviDocenti = output<IDocente[]>();

  aggiungiDocenti(): void {

    // comunica di avere dei dati pronti
    this.onNuoviDocenti.emit(
      [
        {id: 1, cognome: 'Boschi', nome: 'Luca', classi: [], materie: []},
        {id: 2, cognome: 'Festi', nome: 'Claudo', classi: [], materie: []},
        {id: 3, cognome: 'Trentini', nome: 'Andrea', classi: [], materie: []},
        {id: 4, cognome: 'Sannicolò', nome: 'Federico', classi: [], materie: []},
        {id: 5, cognome: 'Tairovski', nome: 'Denis', classi: [], materie: []}
      ]);
  }
}
