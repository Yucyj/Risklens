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

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.clockTime = new Date();
    }, 1000);
    
    // Safety check: force unauthenticated fallback path straight to validation gate
    if (window.location.hash === '' || window.location.hash === '#/') {
      this.router.navigate(['/login']);
    }
  }
}
