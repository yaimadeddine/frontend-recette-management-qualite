import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recette } from 'src/app/models/recette';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-gestion-recettes',
  templateUrl: './gestion-recettes.component.html',
  styleUrls: ['./gestion-recettes.component.css']
})
export class GestionRecettesComponent {
  recettes: Recette[] = [];
  selectedRecipe:any;
  showAddFormFlag: boolean = false;
  showEditFormFlag: boolean = false;
  newRecette:any;
  editRecetteId: number | null = null;

  constructor(private recetteService: RecetteService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getRecettes();


  }
  deleteRecette(recetteD:Recette): void {
    this.recetteService.delete(recetteD.ref).subscribe(() => {
      this.recettes = this.recettes.filter(recette => recette.id !== recetteD.id);
    });
  }
  editRecette(recette: Recette): void {
    this.showEditFormFlag = true;
    this.showAddFormFlag = false;
    this.editRecetteId = recette.id;
    this.newRecette = { ...recette };
  }

  updateRecette(): void {
    if (this.editRecetteId !== null) {
      this.recetteService.update(this.newRecette).subscribe(updatedRecette => {
        const index = this.recettes.findIndex(c => c.id === updatedRecette.id);
        if (index !== -1) {
          this.recettes[index] = updatedRecette;
        }
      });
    }
  }


  getRecettes() {
    this.recetteService.findAll().subscribe((recettes) => {
      this.recettes = recettes;
    });
  }
  closeRecipeModal() {
    this.modalService.dismissAll();
  }
  showAddForm(): void {
    this.showAddFormFlag = true;
    this.showEditFormFlag = false;
  }


}
