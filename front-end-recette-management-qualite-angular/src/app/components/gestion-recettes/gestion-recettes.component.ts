import { Component } from '@angular/core';
import { Recette } from 'src/app/models/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-gestion-recettes',
  templateUrl: './gestion-recettes.component.html',
  styleUrls: ['./gestion-recettes.component.css']
})
export class GestionRecettesComponent {
  recettes: Recette[] = [];

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.getRecettes();


  }


  getRecettes() {
    this.recetteService.findAll().subscribe((recettes) => {
      this.recettes = recettes;
    });
  }

}
