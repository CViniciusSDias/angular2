import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
    route : ActivatedRoute;
    router : Router;

    constructor(service : FotoService, formBuilder : FormBuilder, route : ActivatedRoute, router : Router)
    {
        this.service = service;
        this.formulario = formBuilder.group({
            titulo: [Validators.required, Validators.minLength(4)],
            url: [Validators.required],
            descricao: []
        });
        this.route = route;
        this.route.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.service.buscaPorId(id).subscribe(
                    foto => this.foto = foto.json(),
                    e => console.error(e)
                );
            }
        });
        this.router = router;
    }

    cadastrar(e : Event)
    {
        e.preventDefault();
        this.service.cadastra(this.foto)
            .subscribe(
                resposta => {
                    if (this.foto._id)
                        this.router.navigate(['']);
                    this.foto = new FotoComponent();
                },
                erro => console.error(erro)
            );
    }
}