import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sondage } from './sondage';

@Injectable()
export class DoodleService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'my-auth-token'
        })
    };
    constructor(private http: HttpClient) { 

    }
        /** POST: add a new user to the database */

    createUser(user: User){
        return this.http.post<User>('http://localhost:8080/users/', user)
    }

    createSondage(sondage: Sondage, id_user : number, id_date : Date): Observable<Sondage> {
        return this.http.post<Sondage>('http://localhost:8080/'+id_user+'/'+sondage.id+'/'+id_date, sondage)
    }

    getSondage(id_user : number){
        return this.http.get<Sondage[]>('http://localhost:8080/'+id_user+'/')
    }

    addLieu(id_user : number, id_sondage : number, id_lieu : number){
        return this.http.post('http://localhost:8080/'+id_user+'/'+id_sondage+'/'+id_lieu,null)
    }

    addDate(id_user : number, id_sondage : number, id_date : Date){
        return this.http.post('http://localhost:8080/'+id_user+'/'+id_sondage+'/'+id_date,null)
    }
}
