import { Component, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { burgerMenuAnimation } from '../animations/burger-menu.animations';
import { AuthService } from '../services/auth.service';

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

  constructor(private route: Router, private renderer: Renderer2, private authService: AuthService) {}
  

  onHome() {
    this.route.navigate([''])
  }

  onMenu() {
    this.route.navigate(['/menu'])
  }

  onSignIn() {
    this.route.navigate(['/iniciar-sesion'])
  }

  onSignUp() {
    this.route.navigate(['/subscribirse'])
  }

  onContact() {
    this.route.navigate(['/contacto'])
  }

  onLogout() {
   this.authService.logout().subscribe(
    (response) => {
      console.log('Session ended successfully:', response);
    },
    (error) => {
      console.error('Error in logout:', error);
    }
   )
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
