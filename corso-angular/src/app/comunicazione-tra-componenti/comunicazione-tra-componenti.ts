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
}
