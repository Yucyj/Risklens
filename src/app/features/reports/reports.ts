import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html'
})
export class Reports {
  generateReport() {
    alert('تم توليد التقرير التنفيذي الموحد بنجاح! جاري تحميل ملف الـ PDF الشامل لأسباب مخاطر الأصول والتوقعات الزمنية.');
  }
}
