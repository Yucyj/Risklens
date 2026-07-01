import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RISKLENS_MOCK_DATA, RiskDashboardPayload } from '../../../risk-data.mock';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace.html',
  styleUrls: ['./workspace.css']
})
export class WorkspaceComponent implements OnInit {
  isArabic = true;
  mockData: RiskDashboardPayload = RISKLENS_MOCK_DATA;

  ngOnInit() {}

  toggleLang() { this.isArabic = !this.isArabic; }
}
