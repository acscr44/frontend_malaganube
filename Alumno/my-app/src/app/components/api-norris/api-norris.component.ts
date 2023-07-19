import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { NorrisQuote } from 'src/app/models/norris-quote';
import { NorrisService } from 'src/app/services/norris.service';

@Component({
  selector: 'app-api-norris',
  templateUrl: './api-norris.component.html',
  styleUrls: ['./api-norris.component.css']
})
export class APINorrisComponent implements OnInit{
  
  norrisCita!:string;

  constructor(private norrisService:NorrisService){

  }
  
  observerNorris:Observer<NorrisQuote> = {
    next: (norrisRx:NorrisQuote) => {
      console.log('norrisCita bien recibida ' + norrisRx);
      console.log(norrisRx.value);
      console.log(norrisRx.created_at);
      this.norrisCita = norrisRx.value;
    },
    error: fallo => console.error('Fallo al rx la norrisCita ' + fallo),
    complete: () => console.log('Comunicación completada'),
  };


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.getJoke();
  }

  getJoke() {
    this.norrisService.getNorrisStatement().subscribe(this.observerNorris);
  }

}
