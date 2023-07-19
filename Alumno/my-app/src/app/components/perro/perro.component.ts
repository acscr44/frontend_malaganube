import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit{

  rutaFoto!:string;
  perroWeb!:PerroWeb;
  razaPerro!:string;

  observerPerros:Observer<PerroWeb> = {
    next: (perroRx:PerroWeb) => {
      console.log('Perro recibido bien ' + perroRx);
      console.log(perroRx.message);
      console.log(perroRx.status);
      this.rutaFoto = perroRx.message;
      this.perroWeb = perroRx;
    },
    error: fallo => console.error('Fallo al rx el Perro ' + fallo),
    complete: () => console.log('Comunicación completada'),
  };

  constructor(private perroService:PerroService) {
    console.log("Estamos cargando el componente");
  }

  // La comunicación con un servicio, debe hacerse desde ngOnInit 
  // https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Vamos a traernos un perro del servidor");
    // cuando me suscribo al Observer, le estoy diciendo, cuando vuelvas, me avisas aquí.
    this.damePerro();
    console.log("Perro solicitado .... ");
  }

  damePerro(){
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros);
  }

  //TODO: Hacer un pie de foto en el que salga la raza del perro.
  obtenerRaza():string{
    let rutaArray:Array<string> = this.perroWeb.message.split('/');
    this.razaPerro = rutaArray[4];
    console.log("Raza: " + this.razaPerro);
    return this.razaPerro;
  }

  // https://angular.io/api/common/DatePipe
}
