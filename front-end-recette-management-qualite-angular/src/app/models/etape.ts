export class Etape {
  id: number;
  description: string;
  ordre: number;
  duree: number;

  constructor(id: number, description: string, ordre: number, duree: number) {
    this.id = id;
    this.description = description;
    this.ordre = ordre;
    this.duree = duree;
  }
}
