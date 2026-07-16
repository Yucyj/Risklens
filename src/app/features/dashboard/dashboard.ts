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
  // متغير التحكم في ظهور النافذة التفسيرية المنبثقة
  showXAIModal: boolean = false;

  // دالة تشغيل السيناريو لعرض التفسير الذكي أمام لجنة التحكيم
  openExplainableAI(): void {
    this.showXAIModal = true;
  }

  // دالة إغلاق النافذة
  closeExplainableAI(): void {
    this.showXAIModal = false;
  }
}
