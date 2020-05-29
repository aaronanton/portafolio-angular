import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './common/search/search.component';


const routes: Routes = [
  { path:'home', component:PortafolioComponent },
  { path:'about', component:AboutComponent },
  { path:'item/:id', component:ItemComponent },
  { path:'search/:termino', component:SearchComponent },
  // { path:'', pathMatch:'full', redirectTo: 'home' }, /**IDEA! */
  { path:'**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {useHash: true} )], //{useHash: true} para el uso del /#/ en las rutas del app
  exports: [RouterModule]
})
export class AppRoutingModule { }
