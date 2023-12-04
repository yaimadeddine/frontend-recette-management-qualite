import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { GestionRecettesComponent } from './components/gestion-recettes/gestion-recettes.component';
import { DetailsRecetteComponent } from './components/details-recette/details-recette.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'gestion-recettes', component: GestionRecettesComponent },
  { path: ':id', component: DetailsRecetteComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
