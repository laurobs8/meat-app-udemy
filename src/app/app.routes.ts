import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            // tslint:disable-next-line:max-line-length
            { path: '', redirectTo: 'menu', pathMatch: 'full' }, // Se o caminho for '', redireciona para 'menu', pathMAtch = Caminho seja exatamente esse, ou seja, /restaurants/id e nada mais, será redirecionado para menu
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule' }, // Lazy loading
    { path: 'order-sumary', component: OrderSumaryComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }, //Lazy Loading
];