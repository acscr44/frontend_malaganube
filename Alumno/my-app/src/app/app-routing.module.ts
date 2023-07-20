import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { DniComponent } from './components/dni/dni.component';
import { BasicosNgComponent } from './components/basicos-ng/basicos-ng.component';
import { APINorrisComponent } from './components/api-norris/api-norris.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantesnpagComponent } from './components/restaurantesnpag/restaurantesnpag.component';

// en este array de rutas, tengo que tener una ruta path
// asociado al componente.
const routes: Routes = [
  { path: 'dni', component: DniComponent },
  { path: 'adivina', component: AdivinaComponent },
  { path: 'perros', component: PerroComponent },
  { path: 'basicos-ng', component: BasicosNgComponent },
  { path: 'API-norris', component: APINorrisComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/formularioRestaurante', component: FormularioRestauranteComponent },
  { path: 'restaurantesnpag', component: RestaurantesnpagComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
