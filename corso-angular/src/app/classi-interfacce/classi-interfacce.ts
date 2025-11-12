import { Component, signal, WritableSignal } from '@angular/core';
import { ClasseScolastica } from './classe-scolastica';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {

  // se non si vuole assegnare un valore ad un attributo, attributo!
  classe!: WritableSignal<ClasseScolastica>; //= signal(new ClasseScolastica('1A', '2025-2026'));

  public creaClasse(nome: string, anno: string) {

    try {
      this.classe = signal(new ClasseScolastica(nome, anno));
    }
    catch (error) {
      console.log(error);
    }
  }
}
