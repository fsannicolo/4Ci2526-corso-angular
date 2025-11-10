export class Persona {

    private _id: number;
    private _nome: string;
    private _cognome: string;
    private _genere: string;

    constructor(id: number, nome: string, cognome: string, genere: string) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._genere = genere;
    }

    // lista getter

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get cognome(): string {
        return this._cognome;
    }

    public get genere(): string {
        return this._genere;
    }

    public get nomeCompleto(): string {
        return this._nome + ' ' + this._cognome;
    }

    // lista setter

    public set nome(nuovo: string) {
        this._nome = nuovo;
    }

    public set cognome(nuovo: string) {
        this._nome = nuovo;
    }
    
    public set genere(nuovo: string) {
        this._nome = nuovo;
    }
}
