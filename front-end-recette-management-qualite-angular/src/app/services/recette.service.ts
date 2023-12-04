import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get<Recette[]>("http://localhost:8030/recettes")
  }
}
