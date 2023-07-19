import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos-ng',
  templateUrl: './basicos-ng.component.html',
  styleUrls: ['./basicos-ng.component.css']
})
export class BasicosNgComponent implements OnInit {
/*
HACED UN COMPONENTE NUEVO DENTRO DE LA APLICACIÓN:

- que permita al usuario intrododucir una cadena 
- que muestre la misma cadena que va introduciendo el usuario, pero al revés
- que muestre la longitud de esa cadena
- y que diga si la longitud de esa cadena es par o impar

OBLIGATORIO, usar un directiva *ngIf
*/
texto:string;
textoInvertido:string;
endtask:boolean;

  constructor() {
    this.texto = '';
    this.textoInvertido = '';
    this.endtask = false;
  }
  ngOnInit(): void {
    //  throw new Error('Method not implemented.');

    console.log("Estoy en OnInit");

  }

  comprobarTexto(){
    if (this.textoInvertido=this.invertirCadena(this.texto)){
      this.endtask=true;
    }
  }

  invertirCadena(cadena:string):string{
    let cadenaInvertida:string='';
    for(let i=cadena.length-1;i>=0;i--){
      cadenaInvertida=cadenaInvertida+cadena[i];
    }
    return cadenaInvertida;
  }

  longitudCadena(cadena:string):number{
    return cadena.length;
  } 

  parImpar(cadena:string):string{
    if (this.longitudCadena(cadena)%2==0){
      return "par";
    }
    else{
      return "impar";
    }
  }

}
