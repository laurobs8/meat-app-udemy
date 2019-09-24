import { CartItem } from "./shopping-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(private notificationService: NotificationService) { }

    clear() {
        this.items = [] // limpar é atribuir um valor vazio
    }

    addItem(item: MenuItem) {// MenuItem por que se vai adicionar, significa que nao está ainda no carrinho
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id) // procura se o item que eu adicionei, tem o id igual, se encontrar...
        if (foundItem) {
            this.increaseQtd(foundItem) // incrementa
        } else {
            this.items.push(new CartItem(item)) // senão, adiciona
        }

        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    increaseQtd(item: CartItem) {
        item.quantity = item.quantity + 1;
    }

    decreaseQtd(item: CartItem) {
        item.quantity = item.quantity - 1;

        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        // preicsa dizer qual indice que quer remover =  a partir do indice do item que eu estou pedindo para remover e remover um a partir do indice que estou
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
    }

    total() {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }

}