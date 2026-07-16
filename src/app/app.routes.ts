import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent) 
  },
  {
    path: '',
    loadComponent: () => import('./features/risk-dashboard/dashboard/workspace').then(m => m.WorkspaceComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) // قمنا بفك التكرار وتوجيهها للمكون الجديد هنا
      },
      { 
        path: 'risk-map', 
        loadComponent: () => import('./features/risk-map/risk-map').then(m => m.RiskMap) 
      },
      { 
        path: 'contracts', 
        loadComponent: () => import('./features/contracts/contracts').then(m => m.Contracts) 
      },
      { 
        path: 'deal-flow', 
        loadComponent: () => import('./features/deal-flow/deal-flow').then(m => m.DealFlow) 
      },
      { 
        path: 'forecasting', 
        loadComponent: () => import('./features/forecasting/forecasting').then(m => m.Forecasting) 
      },
      { 
        path: 'integrations', 
        loadComponent: () => import('./features/integrations/integrations').then(m => m.Integrations) 
      },
      { 
        path: 'portfolio', 
        loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio) 
      },
      { 
        path: 'reports', 
        loadComponent: () => import('./features/reports/reports').then(m => m.Reports) 
      },
      { 
        path: 'alerts', 
        loadComponent: () => import('./features/alerts/alerts').then(m => m.Alerts) 
      },
      { 
        path: 'settings',
         
        loadComponent: () => import('./features/settings/settings').then(m => m.Settings) 
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
