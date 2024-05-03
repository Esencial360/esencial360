import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { burgerMenuAnimation } from '../animations/burger-menu.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [burgerMenuAnimation],
})
export class HeaderComponent {
  isOpen: boolean = false;



  constructor(private route: Router, private renderer: Renderer2) {}
  

  onContact() {
    this.route.navigate(['/contact'])
  }

  onHome() {
    this.route.navigate([''])
  }

  onMenu() {
    this.route.navigate(['/menu'])
  }

  
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
          this.renderer.addClass(document.body, 'menu-opened');
        } else {
          this.renderer.removeClass(document.body, 'menu-opened');
        }
  }
}
