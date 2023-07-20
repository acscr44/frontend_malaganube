import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantesnpag',
  templateUrl: './restaurantesnpag.component.html',
  styleUrls: ['./restaurantesnpag.component.css']
})






export class RestaurantesnpagComponent implements OnInit {
  
  lista_restaurantes!:Array<Restaurante>;


  totalRegistros:number = 0;
  totalPorPagina:number = 2;
  opcionesTamanio:number[] = [2, 4, 6, 8];
  paginaActual:number = 0

  constructor(private restauranteService:RestauranteService) { }
  
  ngOnInit(): void {
   this.getRestaurantesPorPaginas();
  }

  borrarRestaurante() {
    //TODO: obtener el id del restaurante y hacer el delete.
    console.log("Quiere borrar el restaurante");
  }

  paginar(evento:PageEvent){
    //TODO: realizar el paginado mediante las variables
    console.log("evento paginator");
    /// Una vez tenemos el getRestaurantesPorPaginas ahora terminamos el paginar()
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;

    /// Ahora invocamos al método del getRestaurantesPorPaginas() al que le llegarán los atributos
    /// paginaActual y totalPorPagina.
    this.getRestaurantesPorPaginas();
  }

  getRestaurantesPorPaginas() {
    this.restauranteService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).
        subscribe({
          complete: () => console.log("completo"),
          error: errorRx => {
            console.log(errorRx);
          },
          next: (paginaRx) => {
            // Hacemos casting de content[].nombre a tipo Array<Restaurante>
            // Para casos muy concretos se puede indicar un campo concreto:
            // this.lista_restaurantes = <Array<Restaurante>> paginaRx.content[0].nombre;
            this.lista_restaurantes = <Array<Restaurante>> paginaRx.content;
            this.totalRegistros = paginaRx.totalElements;

          }
      })
  }

}
