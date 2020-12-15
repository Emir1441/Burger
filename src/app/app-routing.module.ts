import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PizzaPageComponent } from "./product/pizza-page/pizza-page.component";
import { BurgerPageComponent } from "./product/burger-page/burger-page.component";
import { PotatoComponent } from "./product/potato/potato.component";
import { SauceComponent } from "./product/sauce/sauce.component";
import { DrinkComponent } from "./product/drink/drink.component";
import { CartComponent } from "./cart/cart.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'pizza', pathMatch: 'full' }, //это нужно чтоб ангуляр понимал что вначале загружать Home deleted
      // { path: '', component: HomePageComponent }, //можно будет изменить если захотим так он загружает вначале пустую страницу
      { path: 'pizza', component: PizzaPageComponent },
      { path: 'burger', component: BurgerPageComponent },
      { path: 'potato', component: PotatoComponent },
      { path: 'sauce', component: SauceComponent },
      { path: 'drink', component: DrinkComponent },
      { path: 'cart', component: CartComponent }

    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
