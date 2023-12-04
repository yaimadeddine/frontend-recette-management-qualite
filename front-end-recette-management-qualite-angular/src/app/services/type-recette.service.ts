import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeRecette } from '../models/type-recette';

@Injectable({
  providedIn: 'root'
})
export class TypeRecetteService {

  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get<TypeRecette[]>("http://localhost:8030/types-recette")
  }
}
