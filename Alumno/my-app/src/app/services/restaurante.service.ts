import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  static readonly URL_GET_RESTAURANTE:string = "http://localhost:8081/restaurante";

  // Atributo Content-Type/MIME de la cabecera que identifica el contenido del body.
  cabeceras : HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient:HttpClient) { }

  getListaRestaurantes():Observable<Array<Restaurante>>{
    return this.httpClient.get<Array<Restaurante>>(RestauranteService.URL_GET_RESTAURANTE);
  }

  postRestaurante (restaurante:Restaurante):Observable<Restaurante>{
    return this.httpClient.post<Restaurante>(
                      RestauranteService.URL_GET_RESTAURANTE, 
                      restaurante, 
                      {headers:this.cabeceras});
  }


}
