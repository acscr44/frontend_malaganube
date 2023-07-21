import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { MapaComponent } from '../mapa/mapa.component';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
 
  @ViewChild('cajabusqueda') cajaInput!:ElementRef;  // ElementRef es un wrapper de elementos genéricos/etiquetas estandar de HTML.
  // Envoltorio de angular a los elementos/etiquetas nativas "wrapper".
  @ViewChild('mapahijo') mapa!:MapaComponent;
 
  listaRestaurantes!:Array<Restaurante>;
  constructor(private restauranteService:RestauranteService) { }
 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  busqueda1(){
    let terminoBusqueda:string = this.cajaInput.nativeElement.value;
    
    //terminoBusqueda = terminoBusqueda.toLowerCase().trim();
    console.log("busqueda1 " + terminoBusqueda);

    // TODO: consumir el servicio web de búsqueda para traer los restaurantes
    // que coincidan con el término de búsqueda.
    if(terminoBusqueda!=''){
      this.restauranteService.buscarRestaurante(terminoBusqueda).subscribe({
        complete: () => console.log("completo"),
        error: errorRx => {
          console.error(errorRx);
        },
        next: (busquedaRx) => {
          this.listaRestaurantes = busquedaRx;
          console.log(this.listaRestaurantes);
        }
      });
    } else {
      this.listaRestaurantes.length = 0;
    }
  }

  restauranteTocado (restaurante:Restaurante)
  {
      this.listaRestaurantes.length = 0; // borramos la lista
    console.log('Nombre tocado = ' +restaurante.nombre);
    // alert('Nombre tocado = ' +restaurante.nombre + ' id ' +restaurante.id);
    //this.mapa.dibujarPunto(restaurante.latitud, restaurante.longitud);
    this.mapa.dibujarPosicion(restaurante.latitud, restaurante.longitud);
  }


  busqueda2(){}
  busqueda3(){}
  
  


}
