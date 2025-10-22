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

## Deploy dell'applicazione
Per eseguire il build dell'applicazione ed ottenere il file da pubblicare con un server web statico (le applicazioni SSR non richiedono per il loro funzionamento un server node) eseguire il comando:

```bash
ng build
```

Verrà creata la directory `dist/nome-app/browser` che conterrà i file dell'applicazione (index.html, style.css, main.js...).  

Per effettuare una prova con nginx e docker, dopo aver copiato i file in una directory (es app):
```bash
docker run --name webserver -p 6000:80 -v /workspaces/Corso-Angular-4Ci-2025-2026/app:/usr/share/nginx/html nginx
```

## Sviluppo dell'applicazione
Angular vi mette a disposizione un server web di sviluppo che avverte i cambiamenti apportati ai file html, css e typescript ed esegue in automatico il build dell'applicazione e pubblica sul web l'app aggiornata.  
Per avviare il server di sviluppo:
```bash
ng serve
```

## Configurazione Bootstrap
Aggiungiamo il package "bootstrap" per l'estetica e rendere l'applicazione responsive
```bash
npm install bootstrap
```

>[!WARNING]
>L'installazione del pacchetto va effettuata nella directory del progetto Angular

Modifichiamo il file `angular.json` aggiungendo il file css e la libreria js di Bootstrap
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
  "scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## Tools
- [Angular](https://angular.dev/)
- [Node js](https://nodejs.org/en)