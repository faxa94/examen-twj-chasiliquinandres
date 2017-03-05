import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-borrar-artista',
  templateUrl: './borrar-artista.component.html',
  styleUrls: ['./borrar-artista.component.css']
})
export class BorrarArtistaComponent implements OnInit {
 private _parametros: any;

  constructor(private _ActivatedRoute: ActivatedRoute,
    private _http: Http,
    private _masterURL: UrlservidorService) { }

  ngOnInit() {
        this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        console.log(this._parametros.idArtista);
      });
  }

    borrarArtista() {
    this._http.delete(this._masterURL.url + "artista/" + this._parametros.idArtista)
      .subscribe(
      (res) => {
        let eliminar = res.json();
        console.log(eliminar);
        alert("REGISTRO ELIMINADO");
      },
      (err) => {
         alert("ERROR");
        console.log(err);
      }
      )
  }

}
