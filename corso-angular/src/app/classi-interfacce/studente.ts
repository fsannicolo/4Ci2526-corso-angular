import { Persona } from "./persona";

export class Studente extends Persona {

    private _classe: string = '';

    constructor(id: number, nome: string, cognome: string, genere: string, classe: string) {
        super(id, nome, cognome, genere);

        this.classe = classe;
    }

    public get classe(): string {
        return this._classe;
    }

    public set classe(value: string) {

        // regex
        const regex = /^[1-5][A-S][aeim]?$/;
        /*
        ^: inizio
        $: fine
        [1-5]: intervallo numerico
        [ABCDEFQ]: classe di caratteri
        ?: quantificatore 0 o 1
        */

        // controllo la validità di value (anno-sezione-indirizzo)

        if (regex.test(value))
            this._classe = value;
        else 
            throw Error("Nome della classe errato");
    }

    public override toTableRow(): string {
        return `<tr><td scope="row">${this.id}</td><td>${this.nome}</td><td>${this.cognome}</td><td>${this.genere}</td><td>${this.classe}</td></tr>`;
    }
}
