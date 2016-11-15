import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: 'listagem.component.html'
})
export class ListagemComponent
{
    fotos : FotoComponent[] = [];
    service : FotoService;
    mensagem : string = '';

    constructor(service : FotoService)
    {
        service.lista()
            .subscribe(
                res => this.fotos = res,
                erro => console.error(erro)
            );
        this.service = service;
    }

    remove(foto : FotoComponent)
    {
        this.service.remove(foto)
            .subscribe(
                () => {
                    let novasFotos = this.fotos.slice(0);
                    let i = novasFotos.indexOf(foto);
                    novasFotos.splice(i, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                },
                e => {
                    console.error(e);
                    this.mensagem = 'Não foi possível remover a foto';
                }
            );
    }
}