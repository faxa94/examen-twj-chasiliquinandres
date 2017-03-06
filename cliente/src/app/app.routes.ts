import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ArtistaComponent} from "./artista/artista.component";
import {AlbumComponent} from "./album/album.component";
import {ListarAlbumComponent} from "./listar-album/listar-album.component";
import {EditarAlbumComponent} from "./editar-album/editar-album.component";
import {ListarArtistaComponent} from "./listar-artista/listar-artista.component";
import {EditarArtistaComponent} from "./editar-artista/editar-artista.component";
import {BorrarAlbumComponent} from "./borrar-album/borrar-album.component";
import {BorrarArtistaComponent} from "./borrar-artista/borrar-artista.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artistaNuevo', component: ArtistaComponent},
  {path: 'albumNuevo', component: AlbumComponent},
  {path: 'albumListar', component: ListarAlbumComponent},
  {path: 'artistaListar', component: ListarArtistaComponent},
  {path: 'albumListar/:idAlbum/albumEditar', component: EditarAlbumComponent},
  {path: 'artistaListar/:idArtista/artistaEditar', component: EditarArtistaComponent},
  {path: 'albumListar/:idAlbum/albumBorrar', component: BorrarAlbumComponent},
  {path: 'artistaListar/:idArtista/artistaBorrar', component: BorrarArtistaComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

