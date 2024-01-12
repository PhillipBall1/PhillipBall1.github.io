import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // Transitions for the login/register components
  animations: [
    trigger('slideFadeInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-30%)', opacity: 0 }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(30%)', opacity: 0 }))
      ])
    ])
  ]
})
export class UserComponent {
  constructor() {}
  noAccount = false;
}
