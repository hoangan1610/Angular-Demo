import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/feature', pathMatch: 'full' },
  { path: 'feature', loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent) },
  { path: 'admin', loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
