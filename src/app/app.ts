import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  // تفعيل المتغيرات الأساسية التي يطلبها الـ HTML
  isArabic = true;
  
  mockData = {
    generalRiskIndex: 68,
    totalExposureMillions: 12.4,
    highAlertsCount: 23,
    mediumAlertsCount: 42,
    potentialSavingsMillions: 3.1,
    exposureTrend: [
      { year: 2022, actual: 4, projection: 4 },
      { year: 2023, actual: 7, projection: 8 },
      { year: 2024, actual: 11, projection: 13 },
      { year: 2025, actual: 14, projection: 16 },
      { year: 2026, actual: 18, projection: 21.5 }
    ],
    recentAlerts: [
      { id: '1', type: 'دفعة مكررة', message: 'دفعة مكررة - تنبيه رقم 45', timeAgo: 'منذ دقيقتين', severity: 'high' },
      { id: '2', type: 'شذوذ في العقود', message: 'شذوذ في شروط العقد C-789', timeAgo: 'منذ 15 دقيقة', severity: 'medium' },
      { id: '3', type: 'فاتورة خارج النطاق', message: 'فاتورة خارج نطاق المبلغ المعتاد', timeAgo: 'منذ 32 دقيقة', severity: 'medium' },
      { id: '4', type: 'تأخر تحصيل', message: 'تأخر في تحصيل مستحقات الشركة العالقة', timeAgo: 'منذ ساعة واحدة', severity: 'low' }
    ]
  };

  ngOnInit() {}
  
  toggleLang() { 
    this.isArabic = !this.isArabic; 
  }
}
