import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadChildren: () => import("./feature/feature.routes")
            .then(m => m.routes)
    }
];
