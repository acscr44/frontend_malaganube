import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BasicosNgComponent } from './components/basicos-ng/basicos-ng.component';
import { APINorrisComponent } from './components/api-norris/api-norris.component';
import { CdTimerModule } from 'angular-cd-timer';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    DniComponent,
    PerroComponent,
    BasicosNgComponent,
    APINorrisComponent,
    RestaurantesComponent,
    FormularioRestauranteComponent,
    RestaurantesnpagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CdTimerModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
