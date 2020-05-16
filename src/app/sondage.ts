export class Sondage {
    id: number;
    libelle : string;
    description : string;
    constructor() {
        this.libelle = '';
        this.description = '';
    }

    getId(): number {
        return this.id;
    }
    getLibelle(): string {
        return this.libelle;
    }
    getDescription(): string {
        return this.description;
    }
}
