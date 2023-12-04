import { ChefCuisine } from "./chef-cuisine";
import { Etape } from "./etape";
import { Ingredient } from "./ingredient";
import { TypeRecette } from "./type-recette";


export interface Recette {
    id: number;
    nom: string;
    description: string;
    duree: number;
    date_publication: Date;
    ingredients: Ingredient[];
    etapes: Etape[];
    chefCuisine: ChefCuisine;
    typeRecette: TypeRecette;
}
