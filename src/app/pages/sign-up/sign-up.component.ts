import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  signInForm: FormGroup;
  firstStep!: boolean;
  secondStep!: boolean;
  thirdStep!: boolean;
  selectedPlan: 'freemium' | 'premium' | 'pro' = 'freemium';
  promoCode: string = '';

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.firstStep = true;
  }

  onSubmit() {    
    if (this.signInForm.valid) {
      console.log('Form submitted with sanitized values:', this.signInForm);
      this.firstStep = false;
      this.secondStep = true;
    }
  }

  onPlanChange(plan: 'freemium' | 'premium' | 'pro') {
    this.selectedPlan = plan;
    console.log(this.selectedPlan)
  }

  onPromoCodeChange(promoCode: any) {
    this.promoCode = promoCode;
    console.log(this.promoCode);
    
  }

  onChoosePlan() {
    this.firstStep = false;
    this.secondStep = true;
  }

}
