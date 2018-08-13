import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosydirectorioComponent } from './pages/usuariosydirectorio/usuariosydirectorio.component';
import { SalasComponent } from './pages/salas/salas.component';
import { QuejasysugerenciasComponent } from './pages/quejasysugerencias/quejasysugerencias.component';
import { ComedorComponent } from './pages/comedor/comedor.component';



import { LoginComponent } from './login/login.component';





const appRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'noticias', component: NoticiasComponent},
        {path: 'avisos', component: AvisosComponent},
        {path: 'encuestas', component: EncuestasComponent},
        {path: 'usuarios-directorio', component: UsuariosydirectorioComponent},
        {path: 'salas', component: SalasComponent},
        {path: 'quejas-sugerencias', component: QuejasysugerenciasComponent},
        {path: 'comedor', component: ComedorComponent},
        {path: '**', pathMatch: 'full', redirectTo: 'noticias'}
     ]
    },
    {path: 'login', component: LoginComponent}
   // {path: '**', component: NotfoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
