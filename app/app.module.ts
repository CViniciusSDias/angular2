import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http'; // HttpModule contém um provider para Http
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
/**
 * FormsModule Contém a diretiva ngModel
 * e ReactiveFormsModule contém recursos para validação
 */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import 'rxjs/add/operator/map';
import {BotaoModule} from './botao/botao.module';

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule
{}