
import { Chef } from "./chef";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";
import { Type } from "./type";

export class Recette {
  id: number;
  nom: string;
  ref:string;
  description: string;
  duree: number;
  datePublication: Date;
  ingredients: Ingredient[];
  etapes: Etape[];
  image: string;
  chefCuisine: Chef;
  typeRecette: Type;

  constructor(
    id: number,
    nom: string,
    ref: string,
    description: string,
    duree: number,
    image: string,
    datePublication: Date,
    ingredients: Ingredient[],
    etapes: Etape[],
    chefCuisine: Chef,
    typeRecette: Type
  ) {
    this.id = id;
    this.ref=ref;
    this.nom = nom;
    this.image=image;
    this.description = description;
    this.duree = duree;
    this.datePublication = datePublication;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.chefCuisine = chefCuisine;
    this.typeRecette = typeRecette;
  }
}
