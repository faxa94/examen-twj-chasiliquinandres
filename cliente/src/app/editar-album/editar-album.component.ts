import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-editar-album',
  templateUrl: './editar-album.component.html',
  styleUrls: ['./editar-album.component.css']
})
export class EditarAlbumComponent implements OnInit {
  private _parametros: any;
  albumes = [];
  nuevoAlbum= {};
  
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _http: Http,
    private _masterURL: UrlservidorService) { }

  ngOnInit() {

    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url + 'album?id=' + this._parametros.idAlbum)
          .subscribe(
          (res: Response) => {
            this.albumes = res.json();
            console.log(this.albumes);
          },
          (err) => {
            console.log(err)
          }
          )

      });

  }
  //actualizar album
  actualizarAlbum(nombre:string,fechaLanzamiento:string,urlPortada:string) {
    console.log(this._parametros);
    let album = {
      nombre:nombre,
      fechaLanzamiento:fechaLanzamiento,
      urlPortada:urlPortada
    };
    this._http.put(this._masterURL.url + "Album/" + this._parametros.idAlbum, album)
      .subscribe(
      (res: Response) => {
        console.log("Respuesta:", res.json());
        this.nuevoAlbum = {};
      },
      (err) => {
        console.log("Error:", err);
      }
      )
      
  }

}
