import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ArtistaComponent} from "./artista/artista.component";
import {AlbumComponent} from "./album/album.component";
import {ListarAlbumComponent} from "./listar-album/listar-album.component";
import {EditarAlbumComponent} from "./editar-album/editar-album.component";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'album', component: AlbumComponent},
  {path: 'albumListar', component: ListarAlbumComponent},
  {path: 'albumEditar', component: EditarAlbumComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

