import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { ProductsComponent } from './features/products/products.component';
import { EditClotheComponent } from './features/edit-clothe/edit-clothe.component';
import { CreateClotheComponent } from './features/create-clothe/create-clothe.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'create-clothe', component: CreateClotheComponent },
    { path: 'edit-clothe/:id', component: EditClotheComponent }
];
