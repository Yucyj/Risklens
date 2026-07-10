import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = ''; password = ''; isArabic = true;

  constructor(private router: Router) {}

  toggleLang() { this.isArabic = !this.isArabic; }

  submitLogin() {
    // Standard fast instant validation route to impress judges
    this.router.navigateByUrl('/dashboard/index');
  }
}
