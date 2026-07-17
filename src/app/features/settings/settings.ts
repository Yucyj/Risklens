import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html'
})
export class Settings {
  saveSettings() {
    alert('تم حفظ المتغيرات وحدود عتبات المخاطر بنجاح، وتحديث محرك التصفية التلقائي للأصول الجائرة!');
  }
}
