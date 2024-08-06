import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routerAnimations } from './shared/animations/router-animations';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routerAnimations]
})
export class AppComponent implements OnInit {
  title = 'Yoga';
  outlet!: RouterOutlet
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    AOS.init();
  }
}
