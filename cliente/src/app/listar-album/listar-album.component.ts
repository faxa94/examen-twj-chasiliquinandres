import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-listar-album',
  templateUrl: './listar-album.component.html',
  styleUrls: ['./listar-album.component.css']
})
export class ListarAlbumComponent implements OnInit {
  private _parametros: any;
  albumes = [];
  nuevoAlbum = {};


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
  borrarAlbum(id: number) {
    this._http.delete(this._masterURL.url + "album/" + id)
      .subscribe(
      (res) => {
        let eliminar = res.json();
        console.log(eliminar);
      },
      (err) => {
        console.log(err);
      }
      )
  }

}
