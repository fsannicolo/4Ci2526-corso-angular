import { Component, signal, WritableSignal } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // crea un signal che si aggiorna alla modifica
  studente: WritableSignal<string> = signal("Federico");
  contatore: WritableSignal<number> = signal(0);

  immagini: string[] = ['/rubik.png', '/pyraminx_scale.png', '/mirror_scale.png'];
  indiceImg: WritableSignal<number> = signal(0);

  cambiaNome(): void {
    this.studente.set("Luca Boschi");
  }

  incrementa(): void {
    // il metodo update usa:
    // - valore attuale del signal
    // - funzione di callback
    this.contatore.update(valorePrecedente => valorePrecedente + 1);
  }

  decrementa(): void {
    this.contatore.update(valorePrecedente => valorePrecedente - 1);
  }
}
