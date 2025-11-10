import { Persona } from "./persona";

export class Studente extends Persona {

    private _classe: string;

    constructor(id: number, nome: string, cognome: string, genere: string, classe: string) {
        super(id, nome, cognome, genere);

        this._classe = classe;
    }

    public cambiaClasse(value: string) {

        // regex
        // controllo la validità di value (anno-sezione-indirizzo)

        this._classe = value;
    }
}
