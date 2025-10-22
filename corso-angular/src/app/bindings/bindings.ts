import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings {
  // crea un signal se si aggiorna alla modifica
  studente: WritableSignal<string> = signal("Federico");

  cambiaNome(): void {
    this.studente.set("Luca Boschi");
  }
}
