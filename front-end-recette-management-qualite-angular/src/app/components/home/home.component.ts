import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TypeService } from './../../services/type.service';
import { Component } from '@angular/core';
import { Recette } from 'src/app/models/recette';
import { Type } from 'src/app/models/type';
import { RecetteService } from 'src/app/services/recette.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  types: Type[] = [];
  recettes: Recette[] = [];

  constructor(private recetteService: RecetteService,
    private typesService: TypeService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getTypes();
    this.getRecettes();


  }
  getImageUrl(imageData: Uint8Array): SafeUrl {
    const blob = new Blob([imageData], { type: 'image/jpeg' });
    const imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
    return imageUrl;
  }

  getRecettes() {
    this.recetteService.findAll().subscribe((recettes) => {
      this.recettes = recettes;
      console.log(this.recettes);
    });
  }
  getTypes() {
    this.typesService.findAll().subscribe((types) => {
      this.types = types;
    });
  }

}
