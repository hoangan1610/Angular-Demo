// src/app/feature/feature-routing.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const featureRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent }
];
