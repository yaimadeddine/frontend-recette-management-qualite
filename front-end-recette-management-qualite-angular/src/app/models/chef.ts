export class Chef {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;

  constructor(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
  }
}
