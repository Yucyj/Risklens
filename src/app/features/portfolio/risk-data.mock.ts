export interface RiskDashboardPayload {
  generalRiskIndex: number;
  totalExposureMillions: number;
  highAlertsCount: number;
  mediumAlertsCount: number;
  potentialSavingsMillions: number;
  exposureTrend: { year: number; actual: number; projection: number }[];
  recentAlerts: { id: string; type: string; message: string; timeAgo: string; severity: 'high' | 'medium' | 'low' }[];
}

export const RISKLENS_MOCK_DATA: RiskDashboardPayload = {
  generalRiskIndex: 68,
  totalExposureMillions: 12.4,
  highAlertsCount: 23,
  mediumAlertsCount: 42,
  potentialSavingsMillions: 3.1,
  exposureTrend: [
    { year: 2021, actual: 4, projection: 4 },
    { year: 2022, actual: 7, projection: 8 },
    { year: 2023, actual: 11, projection: 13 },
    { year: 2024, actual: 14, projection: 16 },
    { year: 2025, actual: 18, projection: 21.5 },
    { year: 2026, actual: 0, projection: 25 }
  ],
  recentAlerts: [
    { id: '45', type: 'دفعة مكررة', message: 'تنبيه رقم 45: دفعة مكررة', timeAgo: 'منذ دقيقتين', severity: 'high' },
    { id: '789', type: 'شذوذ في العقود', message: 'شذوذ في شروط العقد C-789', timeAgo: 'منذ 15 دقيقة', severity: 'medium' },
    { id: '12', type: 'فاتورة خارج النطاق', message: 'فاتورة خارج نطاق المبلغ المعتاد', timeAgo: 'منذ 32 دقيقة', severity: 'medium' },
    { id: '88', type: 'تأخر تحصيل', message: 'تأخر في تحصيل مستحقات', timeAgo: 'منذ ساعة واحدة', severity: 'low' }
  ]
};
