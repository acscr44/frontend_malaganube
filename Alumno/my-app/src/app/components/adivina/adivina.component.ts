import { Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';
/**
 * 
 * HACER una app donde el programa piense un número del 1 al 100
 * 
 * El usuario, tendrá 5 intentos para averiguar el número pensado por la máquina
 * 
 * Por cada intento, si falla, le debemos dar una pista y decirle si el número introducido
 * es menor o mayor que el buscado.
 * 
 * Si acierta, pues le damos la enhorabuena
 * Si supera los 5 intentos, pues le decimos que ha perdido, y le damos la solución.
 * 
*/

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})

export class AdivinaComponent implements OnInit {
  
  titulo:string;  // titulo de la ventana
  numusuario:number; // numero introducido por el usuario
  numadivina:number; // numero que tiene que adivinar
  intentos:number;
  finpartida:boolean;

  @ViewChild('basicTimer') contador!:CdTimerComponent;
  
  constructor() {
    this.finpartida=false;
    console.log("Estoy en el constructor");
    this.titulo = "Adivina un número en 5 intentos";
    this.numusuario = 0;
    this.numadivina = this.calcularNumAleatorioDe1a100();  // calcula el numero a adivinar
    // console.log("Numero a adivinar " +  this.numadivina);
    console.log(`Numero a adivinar ${this.numadivina} por el usuario`);  // operador plantilla
    this.intentos = 0;
   }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
      console.log("Estamos en OnInit");
  }

  calcularNumAleatorioDe1a100():number
  {
    let numgen:number=0;
      numgen = Math.floor(Math.random() * (100) + 1);
    return numgen;
  }

  comprobarIntentoAECC(){
    console.log("comprobando intento ...")
    console.log("numusuario")
    window.alert("MENSAJE A USUARIO");
    //TODO: completa la lógica, informando al usuario de las circunstancias posibles (Hacerlo con alert)
    // 1- el número buscado es mayor que el introducido
    // 2- el número buscado es menor que el introducido
    // 3- Acierto
    // 4- Has perdido! te has quedado sin intentos.
  }


  comprobarIntento(): void {
    if (this.numusuario === this.numadivina) {
      //this.ganopierdo = "ACIERTO!!";
      window.alert("Has acertado!! Enhorabuena :) ");
      this.finpartida = true;
    } else {
      if (this.numusuario < this.numadivina) {
        //this.mensaje = "El número buscado es mayor que el introducido " + this.numusuario + ".";
        window.alert("El número buscado es mayor que el introducido " + this.numusuario + ".");
      } else {
        //this.mensaje = "El número buscado es menor que el introducido " + this.numusuario + ".";
        window.alert("El número buscado es menor que el introducido " + this.numusuario + ".");
      }
      this.intentos++;
      if (this.intentos === 5) {
        // this.ganopierdo = " Has perdido! te has quedado sin intentos. El número buscado era " + this.numadivina + ".";
        window.alert(" Has perdido! te has quedado sin intentos. El número buscado era " + this.numadivina + ".");
        this.finpartida = true;
      }
    }
    if(this.finpartida){
      let ti:TimeInterface = this.contador.get();
      console.log("Has tardado " + ti.minutes +":"+ ti.seconds);
      this.contador.stop();
    }    
       
  }

      reset(): void {
         window.location.reload(); // recargo la página y con ello el componente
       }


}
