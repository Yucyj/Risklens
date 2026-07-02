import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display: flex; height: 100vh; background: #070a13; color: #f8fafc; font-family: system-ui, sans-serif; margin: 0; overflow: hidden;" [dir]="isArabic ? 'rtl' : 'ltr'">
      <!-- شريط التنقل الجانبي الاحترافي (Sidebar Navigation) -->
      <aside style="width: 260px; background: #0b0f19; border-inline-end: 1px solid #1e293b; display: flex; flex-direction: column; padding: 24px; box-sizing: border-box;">
        <div style="font-size: 24px; font-weight: 800; color: #38bdf8; margin-bottom: 40px;">👁️ RiskLens</div>
        <nav style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
          <button style="background: #1e293b; border: none; color: #fff; padding: 12px 16px; text-align: start; font-size: 15px; font-weight: 600; cursor: pointer; border-radius: 8px; width: 100%;">📊 {{ isArabic ? 'لوحة التحكم' : 'Dashboard' }}</button>
          <button style="background: transparent; border: none; color: #64748b; padding: 12px 16px; text-align: start; font-size: 15px; font-weight: 600; cursor: pointer; border-radius: 8px; width: 100%;">🛡️ {{ isArabic ? 'تحليل المخاطر' : 'Risk Analytics' }}</button>
          <button style="background: transparent; border: none; color: #64748b; padding: 12px 16px; text-align: start; font-size: 15px; font-weight: 600; cursor: pointer; border-radius: 8px; width: 100%;">🔔 {{ isArabic ? 'التنبيهات الفورية' : 'Alerts' }}</button>
        </nav>
      </aside>

      <!-- منطقة المحتوى الرئيسي (Main Content Viewport) -->
      <main style="flex: 1; padding: 40px; overflow-y: auto; box-sizing: border-box;">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
          <div>
            <h2 style="margin: 0 0 6px 0; font-size: 26px; color: #fff;">{{ isArabic ? 'مرحباً بكِ، أ. ريم' : 'Welcome back, Reem' }} 👋</h2>
            <p style="margin: 0; color: #64748b; font-size: 14px;">{{ isArabic ? 'إليك نظرة شمولية تنبؤية على المخاطر المالية والعمليات اليوم' : 'Predictive intelligence summary risk parameters.' }}</p>
          </div>
          <button style="background: #1e293b; border: 1px solid #334155; color: #fff; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600;" (click)="toggleLang()">🌐 {{ isArabic ? 'English' : 'العربية' }}</button>
        </header>

        <!-- شبكة كروت الإحصائيات الكبرى (Metrics Grid) -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px;">
          <div style="background: #0b111e; border: 1px solid #1e293b; border-top: 4px solid #38bdf8; border-radius: 12px; padding: 20px; box-sizing: border-box;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; text-transform: uppercase;">{{ isArabic ? 'إجمالي التعرض المالي' : 'Total Financial Exposure' }}</h3>
            <h2 style="margin: 0; font-size: 28px; font-weight: 800; color: #fff;">12.4 مليون <small style="font-size: 14px; color: #64748b;">ريال</small></h2>
          </div>
          <div style="background: #0b111e; border: 1px solid #1e293b; border-top: 4px solid #ef4444; border-radius: 12px; padding: 20px; box-sizing: border-box;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; text-transform: uppercase;">{{ isArabic ? 'التنبيهات عالية الخطورة' : 'Critical Alerts' }}</h3>
            <h2 style="margin: 0; font-size: 28px; font-weight: 800; color: #ef4444;">23</h2>
          </div>
          <div style="background: #0b111e; border: 1px solid #1e293b; border-top: 4px solid #f59e0b; border-radius: 12px; padding: 20px; box-sizing: border-box;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; text-transform: uppercase;">{{ isArabic ? 'مخاطر متوسطة الأولوية' : 'Medium Threats' }}</h3>
            <h2 style="margin: 0; font-size: 28px; font-weight: 800; color: #f59e0b;">42</h2>
          </div>
          <div style="background: #0b111e; border: 1px solid #1e293b; border-top: 4px solid #10b981; border-radius: 12px; padding: 20px; box-sizing: border-box;">
            <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #64748b; text-transform: uppercase;">{{ isArabic ? 'الوفر المالي المحمي حمايةً' : 'Protected Capital' }}</h3>
            <h2 style="margin: 0; font-size: 28px; font-weight: 800; color: #10b981;">3.1 مليون <small style="font-size: 14px; color: #64748b;">ريال</small></h2>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AppComponent {
  isArabic = true;
  toggleLang() { this.isArabic = !this.isArabic; }
}
