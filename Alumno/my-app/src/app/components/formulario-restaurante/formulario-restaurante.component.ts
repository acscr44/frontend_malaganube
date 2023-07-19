import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css']
})
export class FormularioRestauranteComponent implements OnInit {
  
  // Representa el nuevo restaurante que está conectado al formulario
  restaurante:Restaurante;


  barrios:Array<String>;

  // La inyección de dependencias se realiza en el Constructor: RestauranteService
  // El servicio Router me permite navegar programáticamente - no por Link -
  constructor(private restauranteService:RestauranteService, private servicioRutas:Router) { 
    this.restaurante = new Restaurante();

    this.restaurante.nombre="El Cateto";
    this.restaurante.direccion="La Fuente s/n";
    this.restaurante.barrio="Este";
    this.restaurante.web="http://www.elcateto.org";
    this.restaurante.fichaGoogle="http://www.google.elcateto.org";
    this.restaurante.latitud=30;
    this.restaurante.longitud=30;
    this.restaurante.precio=10;
    this.restaurante.especialidad1="Marisco";
    this.restaurante.especialidad2="Pescado";
    this.restaurante.especialidad3="Carne";

    this.barrios = [
      "Centro", "Este", "Ciudad Jardín", "Bailén-Miraflores", "Palma-Palmilla",
      "Cruz de Humilladero", "Carretera de Cádiz", "Churriana", "Campanillas", 
      "Puerto de la Torre", "Teatinos-Universidad"
    ];
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
   
  }

  crearRestaurante() {
    console.log("enviar los datos");
    console.log(`Restaurante
        ${this.restaurante.nombre}
        ${this.restaurante.direccion}
        ${this.restaurante.barrio}
        ${this.restaurante.web}
        ${this.restaurante.fichaGoogle}
        ${this.restaurante.latitud}
        ${this.restaurante.longitud}
        ${this.restaurante.precio}
        ${this.restaurante.especialidad1}
        ${this.restaurante.especialidad2}
        ${this.restaurante.especialidad3}
      `);

    this.restauranteService.postRestaurante(this.restaurante).subscribe({
      complete: () => console.log('Comunicación completada'),
      error: (errorRx) => {
        console.error(errorRx);
          alert(`Error al insertar el restaurante`);
        },
        next: restauranteNuevo => {
          alert(`Restaurante insertado correctamente con id ${restauranteNuevo.id}`);
          // Automáticamente, tras el POST exitoso, redirijo al usuario al listado.
          this.servicioRutas.navigateByUrl("/restaurantes");
        }
        
      });
      
      
    }
}
