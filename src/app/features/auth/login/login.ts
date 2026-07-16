import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  submitLogin() {
    // Basic verification for our presentation environment
    if (this.email === 'aisha@investment.ai' && this.password === 'demo1234') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('الرجاء إدخال بيانات صحيحة أو استخدام زر الحساب التجريبي المخصص للتحكيم.');
    }
  }

  launchDemoAccount() {
    // Instantly fill credentials to showcase fast access mechanics
    this.email = 'aisha@investment.ai';
    this.password = 'demo1234';
    
    setTimeout(() => {
      this.submitLogin();
    }, 400);
  }
}
