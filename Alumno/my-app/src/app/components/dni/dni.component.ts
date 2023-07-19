import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Dni } from 'src/app/models/dni';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {
  
    // readonly pq es una constante
    // static es un atributo de la clase
    // para cada etiqueta/instancia, no cambia
    static readonly SECUENCIA_LETRAS_DNI:string = "TRWAGMYFPDXBNJZSQVHLCKE";

    numdni:string;
    letra:string;
    titulo:string;

    listaDnis:Array<Dni>;  // esta lista, va a almacenar todos los dnis que calculemos.
    listaDnisExt!:Array<Dni>;    // Not null operator, no obliga a inicializarlo
  

  constructor() { 
    //TODO: completar el ejercicio, para que funcione e informe de la letra del dni introducido.
    this.letra = '';
    this.numdni = '';
    this.titulo = 'CALCULE LA LETRA DE UN DNI';
    this.listaDnis = new Array<Dni>();
    this.listaDnisExt = new Array<Dni>();
  }



  ngOnInit():void {
    /*
    let numdni : number = 64340177;
    let resto : number = numdni%23;
    console.log("resto marcel = " + resto);
    let letra:string = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log(`La letra del dni: ${numdni} es ${letra}`);

    // hago el casting de Element (etiqueta genérica) HTMLInputElement
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    let inputSeleccionado:HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked ');
    console.log(inputSeleccionado.value);
    */
  }

  calcularLetra() : void
  {

    let dni:Dni=new Dni();//creamos dni nuevo
    
    let numdni:number=0;
    let inputSeleccionado : HTMLInputElement = <HTMLInputElement> document.querySelector(' [name="prefijo"]:checked');
    console.log(inputSeleccionado.value);
    if (inputSeleccionado.value!="sin") 
    {
      //estoy en el caso extranjero , recalculo el dni
       let dnistrin:string = inputSeleccionado.value + this.numdni;
       numdni = parseInt(dnistrin);
       dni.prefijo = inputSeleccionado.id;    
    } 
    else
    {
      numdni = parseInt(this.numdni);
    }
    console.log(`El número introducido es  ${this.numdni}`);
    //Integer numero = java
    let resto:number =  numdni%23;
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    console.log("la letra es " + this.letra);

    dni.letra = this.letra;
    dni.numero = parseInt(this.numdni);

    this.listaDnis.push(dni);

    this.mostrarListaDnis();
    this.mostrarListaDnisExtranjeros();
  }

  
  
  mostrarListaDnis():void {
      console.log("Mostrando lista DNIS");
      // programación funcional, expresiones lambda, funciones flecha (distintas formas de llamar lo mismo)
      this.listaDnis.forEach(d => {
        console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`);
      })
  }

  mostrarListaDnisExtranjeros():void {
    console.log("Mostrando lista DNIS EXTRANJEROS");
    // programación funcional, expresiones lambda, funciones flecha (distintas formas de llamar lo mismo)
    const dniext = this.listaDnis.filter(dni => dni.prefijo!='')
    //console.log(`Foreign DNI = ${dniext}`);
    console.log(dniext);
  }

  obtenerDnisExtranjeros():Array<Dni>
  {
    let listaDnisExtranjeros:Array<Dni>

      listaDnisExtranjeros = this.listaDnis.filter(dni => dni.prefijo!='');

    return listaDnisExtranjeros;
  }


  ordenarPorNumero():void {
    //TODO: ordenar los dnis por numero

    this.listaDnis.sort((a, b) => (a.numero - b.numero));

    this.listaDnis.sort(
      (a:Dni, b:Dni) => {
        let resultado:number = 0;

          if (a.numero > b.numero) {
              resultado=1;
          } else if (a.numero < b.numero){
              resultado=-1;
          } else {
            resultado = 0;
          }
          return resultado;
      }
    )
  }

  //TODO: añadir un botón para ordenar por letra

  
  ordenarPorLetra(): void {
    this.listaDnis.sort((a, b) => {
      let letra1 = a.letra.toLocaleUpperCase();
      let letra2 = b.letra.toLocaleUpperCase();
      if (letra1 < letra2) {
        return -1;
      }
      if (letra1 > letra2) {
        return 1;
      }
      return 0;
    });
  }

  

  //TODO: ejercicio IMC, haced un componente nuevo que calcule el IMC, con los rangos(Obesidad,Normal,Delgado)
  // Si se quiere también se puede añadir alguna foto.
  
}