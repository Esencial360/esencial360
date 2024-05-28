import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Category } from '../../../shared/Models/Category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css',
})
export class NewBlogComponent implements OnInit {
  categories: Category[] = [];
  blogForm!: FormGroup;

  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [null, Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.blogService.getAllCategories().subscribe(
      (response) => {
        console.log('Categories successfuly fetch', response);
        this.categories = response;
        // console.log(this.categories)
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      console.log(this.blogForm.value);
      this.blogService.createBlog(this.blogForm.value).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          this.router.navigate([`/blog/${response._id}`])
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }
}
