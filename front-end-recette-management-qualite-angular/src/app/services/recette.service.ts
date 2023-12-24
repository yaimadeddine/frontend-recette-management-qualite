import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private apiUrl = 'http://localhost:8888/RECETTE-MS/api/recette/';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.apiUrl);
  }

  findById(recetteId: number): Observable<Recette> {
    const getUrl = `${this.apiUrl}/${recetteId}`;
    return this.http.get<Recette>(getUrl);
  }

  delete(recetteId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/${recetteId}`;
    return this.http.delete<void>(deleteUrl);
  }

  update(recette: Recette): Observable<Recette> {
    const updateUrl = `${this.apiUrl}/${recette.id}`;
    return this.http.put<Recette>(updateUrl, recette);
  }

  add(newRecette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.apiUrl, newRecette);
  }
}
