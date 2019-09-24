import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: 0
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello!';

  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier
    .do(message => { // executa uma ação no instante que chega a mensagem
      this.message = message;
      this.snackVisibility = 'visible';
    // tslint:disable-next-line:max-line-length
    }).switchMap(message => Observable.timer(3000))// switchMap faz: Quando chega uma mensgem e agente starta um timer, esse tempo começa a contar, quando a gente manda uma outra mensagem ele vai ver que existe um Observable antigo ativo, Entao ele faz naturalmente o unsubscrible no antigo e faz um timer novo
    .subscribe(timer => this.snackVisibility = 'hidden');
  }

}
