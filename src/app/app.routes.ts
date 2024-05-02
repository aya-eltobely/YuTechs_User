import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./news-list/news-list.component').then((x) => x.NewsListComponent),
        title: 'All News'
    },
    {
        path: 'newDetails/:id',
        loadComponent: () => import('./news-details/news-details.component').then((x) => x.NewsDetailsComponent),
        title: 'News Details'
    },
];
