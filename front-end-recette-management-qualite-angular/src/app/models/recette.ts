
import { Chef } from "./chef";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";
import { Type } from "./type";

export class Recette {
  id: number;
  nom: string;
  description: string;
  duree: number;
  datePublication: Date;
  ingredients: Ingredient[];
  etapes: Etape[];
  chefCuisine: Chef;
  typeRecette: Type;

  constructor(
    id: number,
    nom: string,
    description: string,
    duree: number,
    datePublication: Date,
    ingredients: Ingredient[],
    etapes: Etape[],
    chefCuisine: Chef,
    typeRecette: Type
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.duree = duree;
    this.datePublication = datePublication;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.chefCuisine = chefCuisine;
    this.typeRecette = typeRecette;
  }
}
