import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])  // id: parametro que fpo passada nas rotas. Consegue-se obter o valor do parametro
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
// Como passar o id?
// Precisa ter acesso a rota que foi ativada, pra isso o 
// Angular tem o ActivatedRoute que fornece qual foi a URL acionada e quais foram os 
// parametros que foram passadas para a URL.

// Importa, injeta no constructor

// Existe duas maneiras de acessar:
// 1: snapshot: como se fosse uma foto do momento do meu acesso de como estao os estados dos parametros
// 2. subscribe: se inscreve pra obter "atualizações" quando solicitada