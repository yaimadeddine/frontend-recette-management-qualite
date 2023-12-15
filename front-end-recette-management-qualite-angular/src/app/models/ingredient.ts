export class Ingredient {
  id: number;
  nom: string;
  quantite: number;
  unite: string;

  constructor(id: number, nom: string, quantite: number, unite: string) {
    this.id = id;
    this.nom = nom;
    this.quantite = quantite;
    this.unite = unite;
  }
}
