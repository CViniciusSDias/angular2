import {Http, Headers, Response} from '@angular/http';
import {FotoComponent} from './foto.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class FotoService
{
    private http : Http;
    private headers : Headers;
    private url : string = 'v1/fotos';

    constructor(http : Http)
    {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(foto : FotoComponent) : Observable<Response>
    {
        return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers});
    }

    lista() : Observable<Response>
    {
        return this.http.get(this.url);
    }
}