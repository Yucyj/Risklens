import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './workspace.html',
  styleUrl: './workspace.css'
})
export class WorkspaceComponent implements OnInit {
  clockTime: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.clockTime = new Date();
    }, 1000);
  }
}
