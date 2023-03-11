import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ShowCountryComponent } from './countries/pages/show-country/show-country.component';

const routes: Routes = [
  {
    path: '',
    //componente que se va a mostrar por defecto
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'country',
    component: ByCountryComponent,

  },
  {
    path: 'region',
    component: ByRegionComponent,

  },
  {
    path: 'capital',
    component: ByCapitalComponent,

  },
  {
    path: 'country/:id',
    component: ShowCountryComponent,

  },
  {
    path: '**',
    //componente que se va a mostrar cuando no se encuentra la ruta
    redirectTo: ''
  }
];



@NgModule({
  declarations: [],
  imports: [
    // forRoot es para configurar las rutas principales de la aplicacion, si hubiera subrutas se usaria forChild
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
