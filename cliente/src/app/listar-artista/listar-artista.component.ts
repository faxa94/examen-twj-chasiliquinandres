import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-listar-artista',
  templateUrl: './listar-artista.component.html',
  styleUrls: ['./listar-artista.component.css']
})
export class ListarArtistaComponent implements OnInit {
  artistas = [];

  constructor(private _ActivatedRoute: ActivatedRoute,
    private _http: Http,
    private _masterURL: UrlservidorService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + 'artista')
      .subscribe(
      (res: Response) => {
        this.artistas = res.json()
          .map((value) => {
            return value;
          });
        console.log(this.artistas);
      },
      (err) => {
        console.log(err);
      }
      )
  }
   borrarArtista(id: number) {
    this._http.delete(this._masterURL.url + "artista/" + id)
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
