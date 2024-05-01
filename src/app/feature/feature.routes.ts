import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

export const routes: Routes = [
    { 
        path: '', 
        component: FeatureComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component')
                    .then(m => m.DashboardComponent)
            },
            {
                path: 'accounts',
                loadComponent: () => import('./accounts/accounts.component')
                    .then(m => m.AccountsComponent)
            },
            {
                path: 'spending',
                loadComponent: () => import('./spending/spending.component')
                    .then(m => m.SpendingComponent)
            },
            {
                path: 'investment',
                loadComponent: () => import('./investment/investment.component')
                    .then(m => m.InvestmentComponent)
            },
            {
                path: 'transaction',
                loadComponent: () => import('./transaction/transaction.component')
                    .then(m => m.TransactionComponent)
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: "full"
            }
        ]
    },

];