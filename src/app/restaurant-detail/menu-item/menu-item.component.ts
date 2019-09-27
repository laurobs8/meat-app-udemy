import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
// import { trigger } from '@angular/core/src/animation/dsl';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  // styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})

export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter()

  // Sempre que tiver uma propriedade que o PARENT vai informar pra voce, usa-se o Input

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
