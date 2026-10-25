import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'catalogue', loadComponent: () => import('./features/catalogue/catalogue.component').then(m => m.CatalogueComponent) },
  { path: 'book/:id', loadComponent: () => import('./features/book-details/book-details.component').then(m => m.BookDetailsComponent) },
  { path: 'past-papers', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'Past examination papers', description: 'A curated home for past examination papers will be connected here.' } },
  { path: 'research', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'Research resources', description: 'Discover journals, repositories, and research support from the library.' } },
  { path: 'dashboard', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'Student dashboard', description: 'Your personalized library dashboard will appear here after secure sign-in.' } },
  { path: 'borrowed-books', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'Borrowed books', description: 'Borrowing history and due dates will be available through an authorized library connection.' } },
  { path: 'login', loadComponent: () => import('./features/placeholder/placeholder.component').then(m => m.PlaceholderComponent), data: { title: 'Student login', description: 'Secure authentication will be connected here. No personal data is collected in this demo.' } },
  { path: '**', redirectTo: '' }
];
