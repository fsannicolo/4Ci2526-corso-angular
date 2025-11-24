import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';
import { Studente } from './studente';
import { timer } from 'rxjs';
import { IDocente } from './i-docente';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {

  // se non si vuole assegnare un valore ad un attributo, attributo!
  // devo creare l'istanza di classe e non posso averla null, inizialmente la imposto undefined
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined);
  id: number = 1;
  visualizzaErrore: WritableSignal<string> = signal('');

  // esempio uso interfacce
  docente: WritableSignal<IDocente | undefined> = signal({
    id: 1,
    nome: 'Luca',
    cognome: 'Boschi',
    classi: ['3Bi', '4Bi', '5Bi'],
    materie: ['Informatica']
  });

  public creaClasse(nome: string, anno: string) {

    try {
      console.log(nome + ' ' + anno);
      this.classe.set(new ClasseScolastica(nome, anno));
    }
    catch (error: any) {
      //console.log(error);
      // errore visualizzazione classe
      this.visualizzaErrore.set(error);

      timer(4000).subscribe(() => this.visualizzaErrore.set(''))
    }
  }

  aggiungiStudente(nome: string, cognome: string, gender: string): void {

    // ! operatore asserzione tipo non nullo
    console.log(this.classe()!.nomeClasse);
    this.classe()!.aggiungiStudente(new Studente(this.id, nome, cognome, gender, this.classe()!.nomeClasse));
    this.id++;
  }
}
