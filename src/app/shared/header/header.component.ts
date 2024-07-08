import { Component, Renderer2, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { burgerMenuAnimation } from '../animations/burger-menu.animations';
// import { AuthService } from '../services/auth.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [burgerMenuAnimation],
})
export class HeaderComponent {
  @Input()
  userConnected!: boolean;

  isOpen: boolean = false;

  constructor(
    private route: Router,
    private renderer: Renderer2,
    public authService: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  onHome() {
    this.route.navigate(['']);
  }

  onMenu() {
    this.route.navigate(['/menu']);
  }

  onSignIn() {
    this.route.navigate(['/iniciar-sesion']);
  }

  onSignUp() {
    this.route.navigate(['/subscribirse']);
  }

  onContact() {
    this.route.navigate(['/contacto']);
  }

  onUserSettings () {
    this.route.navigate(['/ajustes'])
  }

  onInstructors() {
    this.route.navigate(['/instructores'])
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
