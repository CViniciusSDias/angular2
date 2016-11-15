import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent
{
    foto : FotoComponent = new FotoComponent();
    service : FotoService;
    formulario : FormGroup;

    constructor(service : FotoService, formBuilder : FormBuilder)
    {
        this.service = service;
        this.formulario = formBuilder.group({
            titulo: [Validators.required, Validators.minLength(4)],
            url: [Validators.required],
            descricao: []
        });
    }

    cadastrar(e : Event)
    {
        e.preventDefault();
        this.service.cadastra(this.foto)
            .subscribe(
                resposta => this.foto = new FotoComponent(),
                erro => console.error(erro)
            );
    }
}