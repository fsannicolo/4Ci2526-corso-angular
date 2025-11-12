import { Studente } from "./studente";

export class ClasseScolastica {

    private _nomeClasse: string = '';
    private _annoScolastico: string = '';
    private _studenti: Studente[] = [];

    constructor(nomeClasse: string, annoScolastico: string) {

    }

    public get nomeClasse(): string {
        return this._nomeClasse;
    }

    public get annoScolastico(): string {
        return this._annoScolastico;
    }

    public set annoScolastico(value: string) {

        const regex = /^20\d{2}\/20\d{2}$/;

        if (regex.test(value))
            this._annoScolastico = value;
        else 
            throw new Error('Formato anno scolastico errato')
    }

    public aggiungiStudente(studente: Studente): void {
        studente.classe = this._nomeClasse;
        this._studenti.push(studente);
    }

    public eliminaStudente(index: number) {

        this._studenti.splice(index, 1);
    }

    public modificaStudente(index: number, nuovo: Studente) {

        nuovo.classe = this.nomeClasse;
        this._studenti[index] = nuovo;
    }

    public toTableRow(): string {

        // "map" modifica un array elemento per elemento applicando una funzione
        let tmp = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cognome</th>
                    <th scope="col">Classe</th>
                </tr>
            </thead>
            <tbody>` + 
                this._studenti.map(studente => studente.toTableRow()).toString() + 
            `</tbody>
        </table>`;

        return tmp;
    }
}
