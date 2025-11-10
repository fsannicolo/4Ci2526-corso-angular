import { Component, WritableSignal, signal } from '@angular/core';
import { getCurrentInjector } from '@angular/core/primitives/di';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css'
})
export class StructuralDirectives {

  // Signal che ci permette di visualizzare o meno un paragrafo: esempio 1
  visualizza: WritableSignal<boolean> = signal(false);
  immagineOTesto: WritableSignal<string> = signal('immagine');
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Claudio', 'Luca', 'Federico']);

  indiceModifica: WritableSignal<number> = signal(-1);
  tipoUtente: WritableSignal<string> = signal('studente');

  toggleVisualizza(): void {
    this.visualizza.update(current => !current);
  }

  vaiAImmagine(): void {
    this.immagineOTesto.set('immagine');
  }

  vaiATesto(): void {
    this.immagineOTesto.set('testo');
  }

  aggiungiNome(nome: any): void {
    //console.log(nome.value);
    this.nomi.update(current => [...current, nome.value])
    // genera un nuovo array che contiene gli stessi elementi, più un nuovo in coda
  }

  eliminaNome(indice: number): void {
    this.nomi.update(current => {
      current.splice(indice, 1);
      return current;
    });
  }

  attivaModifica(indice: number): void {
    this.indiceModifica.set(indice);
  }

  annulla(): void {
    this.indiceModifica.set(-1);
  }

  salva(nome: string, indice: number): void {
    this.nomi.update(current => {
      current[indice] = nome;
      return current;
    });

    this.indiceModifica.set(-1);
  }

  setStudente(): void {
    this.tipoUtente.set('studente');
  }

  setDocente(): void {
    this.tipoUtente.set('docente');
  }

  setGenitore(): void {
    this.tipoUtente.set('genitore');
  }

  setAltro(): void {
    this.tipoUtente.set('altro');
  }
}
