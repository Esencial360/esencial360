import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  showPassword = false;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {    
    if (this.signInForm.valid) {
      console.log('Form submitted with sanitized values:', this.signInForm.value.email, this.signInForm.value.password);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToSignup() {
    this.router.navigateByUrl('/subscribirse').then(navigationSuccess => {
      if (navigationSuccess) {
        console.log('Navigation to subscribirse page successful');
      } else {
        console.error('Navigation to subscribirse page failed'); 
      }
    }).catch(error => {
      console.error(`An error occurred during navigation: ${error.message}`);
    });
  }

}
