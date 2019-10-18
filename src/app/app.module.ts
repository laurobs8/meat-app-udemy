import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common' // EStrategia de hash pra ser aberto o componente pelo
//Servidor. Chamando  hash na url, ele pede o index.html onde estao todas as rotas e exibe o componente da url desejado, sem isso
// ele joga um erro 404.

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    // CoreModule,
    // tslint:disable-next-line:max-line-length
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }), // Carrega previamente paginas em lazy loading em background (Indicado para lazy loading muito grandes)
    SharedModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
    ReactiveFormsModule,
  {
    provide: LOCALE_ID, useValue: 'pt-BR'  // Locale é referente ao uso do padrão brasileiro de moeda
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
