import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './workspace.html',
  styleUrl: './workspace.css'
})
export class WorkspaceComponent implements OnInit {
  clockTime: Date = new Date();
  
  // Track toggle variable state parameter configuration for mobile screens
  isMobileMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.clockTime = new Date();
    }, 1000);

    // Initial navigation check to ensure safe landing state execution
    if (window.location.hash === '' || window.location.hash === '#/') {
      this.router.navigate(['/login']);
    }
  }

  // Toggle layout overlay display visibility state parameter rules on tap
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Auto close slide drawer tray menu frame right upon clicking link navigation options
  closeMenuOnMobile(): void {
    this.isMobileMenuOpen = false;
  }
}
