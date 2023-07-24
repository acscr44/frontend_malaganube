import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  private map!:any;

  constructor() {
   }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap():void{
    this.map = L.map('map', {
      center: [ 36.731683, -4.4656121 ],
      zoom: 50
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  // Método de Verónica
  dibujarPunto(latitud:number, longitud:number){
   
    L.marker([latitud, longitud]).addTo(this.map)
    .bindPopup('Su restaurante se encuentra aqui')
    .openPopup();
  }

  // Método de Val
  dibujarPosicion (latitude:number, longitude:number)
  {
    //USO EL API DE LEAFLET //https://leafletjs.com/examples/quick-start/
    let nivel_de_zoom = 12;


    this.map.setView([latitude, longitude], nivel_de_zoom);//
    //coordenadas del Estadio del Madrid 40.4530387,-3.6883337
    var circle = L.circle([latitude, longitude], {
      color: 'blue',
      fillColor: '#000',
      fillOpacity: 0.5,
      radius: 50
    }).addTo(this.map);
  }  



}
