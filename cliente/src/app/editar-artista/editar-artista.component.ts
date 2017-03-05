import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-editar-artista',
  templateUrl: './editar-artista.component.html',
  styleUrls: ['./editar-artista.component.css']
})
export class EditarArtistaComponent implements OnInit {
  artistas = [];
  albumArtista:string;
  private _parametros: any;
  albumes = [];
  nuevoArtista = {};

  constructor(private _ActivatedRoute: ActivatedRoute,
    private _http: Http,
    private _masterURL: UrlservidorService) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url + 'artista?id=' + this._parametros.idArtista)
          .subscribe(
          (res: Response) => {
            this.artistas = res.json();
            let albumNombre=[];
            albumNombre.push(this.artistas);
            this.albumArtista=albumNombre[0].idAlbum.nombre;
            console.log(this.artistas);
            console.log(this.albumArtista);
          },
          (err) => {
            console.log(err)
          }
          )
      });
    //para los albumes
    this._http.get(this._masterURL.url + 'album')
      .subscribe(
      (res: Response) => {
        this.albumes = res.json()
          .map((value) => {
            // value.formularioCerrado = true;
            return value;
          });
        console.log(this.albumes);
      },
      (err) => {
        console.log(err);
      }
      )
  }


 actualizarArtista(nombre: string, estilo: string, idAlbum: number,paisResidencia:string) {
   let artista = {
      nombre: nombre,
      estilo: estilo,
      idAlbum: idAlbum,
      paisResidencia:paisResidencia
    };
    this._http.put(this._masterURL.url + "artista/" + this._parametros.idArtista, artista)
      .subscribe(
      (res: Response) => {
        console.log("Respuesta:", res.json());
        this.nuevoArtista = {};
      },
      (err) => {
        console.log("Error:", err);
      }
      )
  }
  
}
