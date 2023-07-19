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



  postRestauranteConFoto (restaurante:Restaurante, archivo:File): Observable<Restaurante>
  {
//declaramos una variable local que represente el FormData
    let formData = new FormData();

        formData.append('nombre', restaurante.nombre);
        formData.append('direccion', restaurante.direccion);
        formData.append('barrio', restaurante.barrio);
        formData.append('web', restaurante.web);
        formData.append('fichaGoogle', restaurante.fichaGoogle);
        formData.append('latitud', restaurante.latitud+'');
        formData.append('longitud',  restaurante.longitud+'');
        formData.append('precio', restaurante.precio+'');
        formData.append('especialidad1', restaurante.especialidad1);
        formData.append('especialidad2', restaurante.especialidad2);
        formData.append('especialidad3', restaurante.especialidad3);
        formData.append('archivo', archivo);
    
    return this.httpClient.post<Restaurante>(RestauranteService.URL_GET_RESTAURANTE+"/crear-con-foto", formData);
  }
}
