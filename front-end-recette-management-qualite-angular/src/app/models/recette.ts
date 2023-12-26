
import { Chef } from "./chef";
import { Etape } from "./etape";
import { Image } from "./image";
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
  images: Image[];
  chefCuisine: Chef;
  typeRecette: Type;

  constructor(
    id: number,
    nom: string,
    ref: string,
    description: string,
    duree: number,
    images: Image[],
    datePublication: Date,
    ingredients: Ingredient[],
    etapes: Etape[],
    chefCuisine: Chef,
    typeRecette: Type
  ) {
    this.id = id;
    this.ref=ref;
    this.nom = nom;
    this.images=images;
    this.description = description;
    this.duree = duree;
    this.datePublication = datePublication;
    this.ingredients = ingredients;
    this.etapes = etapes;
    this.chefCuisine = chefCuisine;
    this.typeRecette = typeRecette;
  }
}
