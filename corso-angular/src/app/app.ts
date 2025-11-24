import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bindings } from './bindings/bindings';
import { NavBar } from './nav-bar/nav-bar';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { ClassiInterfacce } from './classi-interfacce/classi-interfacce';
import { ComunicazioneTraComponenti } from './comunicazione-tra-componenti/comunicazione-tra-componenti';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bindings, StructuralDirectives, ClassiInterfacce, ComunicazioneTraComponenti, NavBar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corso-angular');
}
