import {Component, ElementRef, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: 'modal.component.html'
})
export class ModalComponent
{
    @Input() private titulo : string = 'Tem certeza?';
    @Input() private frase : string;
    @Output() public confirma : EventEmitter<{}> = new EventEmitter();

    public constructor(private _elemento : ElementRef)
    {
        this._elemento = _elemento;
    }

    public ngOnInit()
    {
        $(this._elemento.nativeElement).dialog({
            title: this.titulo,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: () => $(this._elemento.nativeElement).dialog("close"),
                Confirmar: ()=> {
                    $(this._elemento.nativeElement).dialog("close");
                    this.confirma.emit();
                }
            }
        });
    }

    public show()
    {
        $(this._elemento.nativeElement).dialog('open');
    }
}