import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('User')
export class User {
    id: number;
    email: string;
    prenom_participant: string;
    nom_participant: string;
    constructor() {
        this.email = '';
        this.prenom_participant = '';
        this.nom_participant = '';
    }

    getId(): number {
        return this.id;
    }
    getEmail(): string {
        return this.email;
    }
    getPrenom(): string {
        return this.prenom_participant;
    }
    getNom(): string {
        return this.nom_participant;
    }
}
