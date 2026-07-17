import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  // 🧠 الدالة المحدثة لكسر تجميد التوجيه ونقلك فوراً للداخل
  bypassCacheLogin(): void {
    console.log('جاري بث الانتقال القسري لفك تجميد الملاحة...');
    
    // 1. نقل المتصفح مباشرة عبر الرابط الصريح المتوافق مع الـ Hash
    window.location.assign('#/dashboard');
    
    // 2. إجبار الموجه الداخلي على التنشيط الفوري للمسار
    this.router.navigateByUrl('/dashboard').catch(err => {
      console.warn('تنبيه الملاحة النسبية: تم النقل عبر الـ location window بنجاح.');
    });
  }
}
