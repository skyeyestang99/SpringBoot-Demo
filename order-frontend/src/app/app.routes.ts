import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { UserComponent } from './component/user/user.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'users', component: UserComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: '' }
];
