import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./feature/feature.component').then(m => m.FeatureComponent) 
    }
];
