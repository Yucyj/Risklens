import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts.html'
})
export class Contracts {
  activeScenario = 1;
  simYield = '15%';
  simRisk = 18;
  simVerdict = 'مخاطرة مرتفعة بسبب غياب بنود الحماية المالية الاستباقية؛ ينصح النظام بتعديل صياغة العقد وإضافة بنود رهن تجارية.';

  runSimulation(id: number) {
    this.activeScenario = id;
    if (id === 1) { this.simYield = '15%'; this.simRisk = 18; this.simVerdict = 'مخاطرة مرتفعة بسبب غياب بنود الحماية الاستباقية في البند الجزائي.'; }
    else if (id === 2) { this.simYield = '14%'; this.simRisk = 7; this.simVerdict = 'ممتاز! إضافة بند الضمانات خفض احتمالية التعثر بنسبة 11% مع الحفاظ على العائد.'; }
    else { this.simYield = '11%'; this.simRisk = 4; this.simVerdict = 'آمن ومستقر، تقليص التمويل لـ 8 ملايين يحميك تماماً من تقلبات سيولة السوق.'; }
  }
}
