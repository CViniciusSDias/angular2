import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http'; // HttpModule contém um provider para Http
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
import {FormsModule} from '@angular/forms'; // Contém a diretiva ngModel
// import 'rxjs/add/operator/map';

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule
{}