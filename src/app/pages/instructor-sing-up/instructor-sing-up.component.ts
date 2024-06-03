import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-sing-up',
  templateUrl: './instructor-sing-up.component.html',
  styleUrl: './instructor-sing-up.component.css'
})
export class InstructorSingUpComponent implements OnInit {
  instructorForm: FormGroup;
  resumeFile: File | null = null;
  resumeError: string = '';
  formSubmitted!: boolean

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.instructorForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      experience: [0, [Validators.required, Validators.min(0)]],
      bio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formSubmitted = false;
  }

  onHome() {
    this.router.navigate(['/'])
  }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        this.resumeFile = file;
        this.resumeError = '';
      } else {
        this.resumeFile = null;
        this.resumeError = 'Invalid file type. Please upload a PDF file.';
      }
    }
  }
  onSubmit() {
    if (this.instructorForm.valid && this.resumeFile) {
      const instructorData = {
        ...this.instructorForm.value,
        resume: this.resumeFile,
      };
      // TODO: Implement the logic to submit the instructor data (including the resume) to your backend API
      console.log('Instructor data submitted:', instructorData);
      // Reset the form and file input after submission
      this.instructorForm.reset();
      this.resumeFile = null;
      this.formSubmitted = true;
    }
  }

}
