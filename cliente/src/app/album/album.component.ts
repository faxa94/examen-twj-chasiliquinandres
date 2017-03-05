import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import { UrlservidorService } from '../service/urlservidor.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumes=[];
  nuevoAlbum= {};

  //constructor
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:UrlservidorService) { }
//ngOnInit
  ngOnInit() {
  }


//crear album
  crearAlbum(nombre:string,fechaLanzamiento:string,urlPortada:string){
    let album = {
      nombre:nombre,
      fechaLanzamiento:fechaLanzamiento,
      urlPortada:urlPortada
    };
    this._http.post(this._masterURL.url+'Album',album)
      .subscribe(
        (res:Response)=>{
          this.albumes.push(res.json());
          console.log(this.albumes);
          this.nuevoAlbum = {};
        },
        (err)=>{
          console.log(err)
        }
      )
  }

}
