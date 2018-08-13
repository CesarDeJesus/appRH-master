import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


// RUTAS
import { APP_ROUTES } from './app.routes';

// COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosydirectorioComponent } from './pages/usuariosydirectorio/usuariosydirectorio.component';
import { SalasComponent } from './pages/salas/salas.component';
import { QuejasysugerenciasComponent } from './pages/quejasysugerencias/quejasysugerencias.component';
import { ComedorComponent } from './pages/comedor/comedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    NoticiasComponent,
    AvisosComponent,
    EncuestasComponent,
    NotfoundComponent,
    PagesComponent,
    UsuariosydirectorioComponent,
    SalasComponent,
    QuejasysugerenciasComponent,
    ComedorComponent
  ],
  imports: [
    SweetAlert2Module,
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
