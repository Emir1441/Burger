import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PizzaPageComponent } from './product/pizza-page/pizza-page.component';
import { BurgerPageComponent } from './product/burger-page/burger-page.component';
import { PotatoComponent } from './product/potato/potato.component';
import { SauceComponent } from './product/sauce/sauce.component';
import { DrinkComponent } from './product/drink/drink.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { AuthInterseptor } from './shared/auth.interseptor';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PizzaPageComponent,
    BurgerPageComponent,
    PotatoComponent,
    SauceComponent,
    DrinkComponent,
    CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    ReactiveFormsModule,
    QuillModule.forRoot()


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterseptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
