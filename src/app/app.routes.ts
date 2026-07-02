import { Routes } from '@angular/router';
import { WorkspaceComponent } from './features/risk-dashboard/workspace/workspace';

export const routes: Routes = [
  { path: '', redirectTo: 'workspace', pathMatch: 'full' },
  { path: 'workspace', component: WorkspaceComponent }
];
