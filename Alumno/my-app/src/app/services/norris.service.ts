import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NorrisQuote } from '../models/norris-quote';

@Injectable({
  providedIn: 'root'
})
export class NorrisService {

  static readonly URL_API_NORRIS = "https://api.chucknorris.io/jokes/random";

  constructor(private httpClient:HttpClient) { 

  }


  getNorrisStatement():Observable<NorrisQuote> {
    return this.httpClient.get<NorrisQuote>(NorrisService.URL_API_NORRIS);
  }


}
