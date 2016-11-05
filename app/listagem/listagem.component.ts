import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent
{
    fotos : Object[] = [];

    constructor(http : Http)
    {
        http.get('v1/fotos')
            .subscribe(res => {
                this.fotos = res.json();
                console.log(this.fotos);
            }, erro => {
                console.error(erro);
            });
    }
}