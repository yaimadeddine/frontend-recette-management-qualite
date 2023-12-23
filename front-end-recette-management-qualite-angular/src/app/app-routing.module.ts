import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GestionRecettesComponent } from './components/gestion-recettes/gestion-recettes.component';
import { DetailsRecetteComponent } from './components/details-recette/details-recette.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'gestion-recettes', component: GestionRecettesComponent },
  { path: 'recettes', component: HomeComponent },
  { path: 'recette/:id', component: DetailsRecetteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
