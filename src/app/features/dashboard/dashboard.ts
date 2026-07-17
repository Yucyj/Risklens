import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  isAnalyzing: boolean = false;
  analysisProgress: number = 0;
  showXAIModal: boolean = false;

  triggerAIAnalysis(): void {
    this.isAnalyzing = true;
    this.analysisProgress = 0;
    
    const interval = setInterval(() => {
      if (this.analysisProgress < 100) {
        this.analysisProgress += 10;
      } else {
        clearInterval(interval);
        this.isAnalyzing = false;
        alert('اكتمل تحليل الثروة المالية وصافي القيمة الحالية للمحفظة بنجاح! تم تحديث لوحة التحكم 🤖');
      }
    }, 250);
  }

  openXAI(): void { this.showXAIModal = true; }
  closeXAI(): void { this.showXAIModal = false; }
}
