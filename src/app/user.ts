import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('User')
export class User {
    id: number;
    @JsonProperty('email', String)
    email: string;
    @JsonProperty('prenom_participant', String)
    prenom: string;
    @JsonProperty('nom_participant', String)
    nom: string;
    constructor() {
        this.email = '';
        this.prenom = '';
        this.nom = '';
    }

    getId(): number {
        return this.id;
    }
    getEmail(): string {
        return this.email;
    }
    getPrenom(): string {
        return this.prenom;
    }
    getNom(): string {
        return this.nom;
    }
}
