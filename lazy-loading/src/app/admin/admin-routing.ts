// src/app/admin/admin-routing.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

export const adminRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent }
];
