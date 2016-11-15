import {Http, Headers, Response} from '@angular/http';
import {FotoComponent} from './foto.component';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

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

    cadastra(foto : FotoComponent) : Observable<MensagemCadastro>
    {
        if (foto._id)
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), {headers: this.headers})
                .map(() => new MensagemCadastro('Foto alterada com sucesso', false));

        return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers})
            .map(() => new MensagemCadastro('Foto cadastrada com sucesso', true));
    }

    lista() : Observable<FotoComponent[]>
    {
        return this.http.get(this.url).map(f => f.json());
    }

    remove(foto : FotoComponent)
    {
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id : string) : Observable<FotoComponent>
    {
        return this.http.get(this.url + '/' + id).map(f => f.json());
    }
}

class MensagemCadastro
{
    constructor(private _mensagem : string, private _inclusao : boolean)
    {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem() : string
    {
        return this._mensagem;
    }

    get inclusao() : boolean
    {
        return this._inclusao;
    }
}