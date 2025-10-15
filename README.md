# 4Ci2526-corso-angular

## Configurazione iniziale
1. Installare [Node js](https://nodejs.org/en)

```bash
npm install -g @angular/cli
```

## Creare la prima applicazione
```bash
ng new nome-app
```

> [!TIP]
> Con la CLI Angular si consiglia l'utilizzo della notazione kebab-case

## Struttura dell'applicazione
- `.vscode`: cartella nascosta di VS Code
- `node_modules`: sempre presente nei progetti Node e gestita da npm (.gitignore)
- `public`: cartella per i media da utilizzare nel progetto
- `src`: contiene i sorgenti dell'applicazione
  - `style.css`: stili globali dell'applicazione
  - `main.ts`: configurazione iniziale da cui eseguire il bootstrap dell'applicazione 
  - `index.html`: unica pagina dell'applicazione (single-page application)
    - `app.config.ts`: configurazione dell'applicazione
    - `app.routes.ts`: specifica quale componente visualizzare a seconda dell'URL
    - `app.ts`: definizione della business logic del componente (ogni componente è definito da una classe specificata tramite decoratore `@Component`)

    ```Typescript
    @Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
    })

    export class App {
    protected readonly title = signal('hello-world');
    }
    ```

    - `app.spec.ts`: codice per i test automatici dell'applicazione
  - `.editorconfig`: configurazione dell'editor
  - `.gitignore`: elenco di file e directory che Git deve ignorare
  - `angular.json`: configurazione globale dell'applicazione
  - `package.json`, `package-lock.json`: dependancies Node del progetto

## Tools
- [Angular](https://angular.dev/)
- [Node js](https://nodejs.org/en)