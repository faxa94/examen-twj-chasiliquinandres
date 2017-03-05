import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './artista/artista.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import { ListarAlbumComponent } from './listar-album/listar-album.component';
import { ListarArtistaComponent } from './listar-artista/listar-artista.component';
import { UrlservidorService } from './service/urlservidor.service';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarArtistaComponent } from './editar-artista/editar-artista.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    AlbumComponent,
    HomeComponent,
    ListarAlbumComponent,
    ListarArtistaComponent,
    EditarAlbumComponent,
    EditarArtistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UrlservidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
