import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  // DESDE AQUÍ, VAMOS A INTERACTUAR CON EL SERVIDOR

  static readonly URL_API_PERROS = "https://dog.ceo/api/breeds/image/random";

  //Concepto de inyección de dependencias de Autowired@JAVA, pero de distrinto nombrado: HttpClient
  //@Autowired 
  //httpClient:HttpClient;

  constructor(private httpClient:HttpClient) { 
    
  }

  
  getPerroAleatorio():Observable<PerroWeb> {
    // Entre <comillas> indico el tipo de dato recibido, el cuerpo del mensaje en JSON.
    return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  }


}
