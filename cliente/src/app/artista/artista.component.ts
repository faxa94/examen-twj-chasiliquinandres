import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  albumes = [];
  artistas = [];
  nuevoArtista = {};

  constructor(private _ActivatedRoute: ActivatedRoute,
    private _http: Http,
    private _masterURL: UrlservidorService) { }

  ngOnInit() {
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
  //crear artista 
  crearArtista(nombre: string, estilo: string, idAlbum: number,paisResidencia:string) {
    let artista = {
      nombre: nombre,
      estilo: estilo,
      idAlbum: idAlbum,
      paisResidencia:paisResidencia
    };
    console.log(artista);
    this._http.post(this._masterURL.url + 'Artista', artista)
      .subscribe(
      (res: Response) => {
        this.artistas.push(res.json());
        console.log(this.artistas);
        this.nuevoArtista = {};
      },
      (err) => {
        console.log(err)
      }
      )
  }

}
