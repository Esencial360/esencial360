import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routerAnimations } from './shared/animations/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routerAnimations]
})
export class AppComponent {
  title = 'Yoga';
  outlet!: RouterOutlet
  constructor(public route: ActivatedRoute) {}
}
