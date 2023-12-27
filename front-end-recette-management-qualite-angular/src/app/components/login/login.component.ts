import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = { email: '', nom: '', prenom: '', password: '' };

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  redirectToGestionRecettes() {
    this.router.navigate(['/gestion-recettes']);
  }
}
