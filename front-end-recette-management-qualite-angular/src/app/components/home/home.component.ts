import { Component } from '@angular/core';
import { Recette } from 'src/app/models/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
