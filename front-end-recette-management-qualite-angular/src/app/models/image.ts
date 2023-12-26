import { Recette } from "./recette";

export class Image {
  id: number;
  name: string;
  imageData: Uint8Array;
  recette: Recette;

  constructor(id: number, name: string, imageData: Uint8Array, recette: Recette) {
    this.id = id;
    this.name = name;
    this.imageData = imageData;
    this.recette = recette;
  }
}
