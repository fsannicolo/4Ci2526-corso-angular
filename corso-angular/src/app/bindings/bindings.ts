import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings implements OnInit {

  // crea un signal che si aggiorna alla modifica
  studente: WritableSignal<string> = signal("Federico");
  contatore: WritableSignal<number> = signal(0);

  // property binding
  immagini: string[] = ['/rubik.png', '/pyraminx_scale.png', '/mirror_scale.png'];
  indiceImg: WritableSignal<number> = signal(0);

  // style binding
  colors: string[] = ['red', 'green', 'blue', 'orange', 'violet', 'black'];
  colore: WritableSignal<string> = signal(this.colors[0]);

  classi: string = 'border lead';
  backGround: WritableSignal<boolean> = signal(true);

  // eseguita alla visualizzazione del component
  ngOnInit(): void {
    let cronometro = interval(1000).subscribe(() => this.cambiaColore());

    interval(500).subscribe(() => this.backGround.update(valoreAttuale => !valoreAttuale));
  }

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

  next(): void {
    if (this.indiceImg() < this.immagini.length)
      this.indiceImg.update(valorePrecedente => valorePrecedente + 1);
  }

  prec(): void {
    if (this.indiceImg() > 0) 
      this.indiceImg.update(valorePrecedente => valorePrecedente - 1);
  }

  cambiaColore(): void {
    let random = Math.round(Math.random() * this.colors.length-1);
    this.colore.set(this.colors[random]);
  }
}
