import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from '../../shared/services/instructor.service';
import { BlogService } from '../../shared/services/blog.service';
import { Blog } from '../../shared/Models/Blog';
import { Instructor } from '../../shared/Models/Instructor';
import { AuthService } from '@auth0/auth0-angular';

interface ClassOverview {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface InstructorsOverview {
  image: string;
  name: string;
  title: string;
}

interface BlogOverview {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  classes: ClassOverview[] = [];
  instructors: Instructor[] = [];
  blogs: Blog[] = [];
  backgroundImageUrl = '../../../assets/images/yoga.jpg';

  constructor(
    private router: Router,
    private blogService: BlogService,
    private instructorService: InstructorService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.classes = [
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'YOGA',
        description:
          'Get lost in your flow state with every yoga variety, from Vinyasa to Hatha.',
        link: 'linktoclasses',
      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'FITNESS',
        description:
          'Get lost in your flow state with every yoga variety, from Vinyasa to Hatha.',
        link: 'linkToClasses',
      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'MINDFULNESS',
        description:
          'Level up your workout with Pilates, Barre, HIIT, and much more',
        link: 'linkToClasses',
      },
    ];

    this.fetchBlogs();
    this.fetchInstructors();
  }

  async fetchBlogs() {
    await this.blogService.getAllBlogs().subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
        console.log(this.blogs);
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  async fetchInstructors() {
    await this.instructorService.getAllInstructors().subscribe(
      (instructors: Instructor[]) => {
        this.instructors = instructors;
        console.log(this.instructors);
      },
      (error) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  navigateToBlog() {
    this.router
      .navigateByUrl('/blog')
      .then((navigationSuccess) => {
        if (navigationSuccess) {
          console.log('Navigation to blog page successful');
        } else {
          console.error('Navigation to blog page failed');
        }
      })
      .catch((error) => {
        console.error(`An error occurred during navigation: ${error.message}`);
      });
  }

  navigateToInstructors() {
    this.router
      .navigateByUrl('/instructores')
      .then((navigationSuccess) => {
        if (navigationSuccess) {
          console.log('Navigation to instructores page successful');
        } else {
          console.error('Navigation to instructores page failed');
        }
      })
      .catch((error) => {
        console.error(`An error occurred during navigation: ${error.message}`);
      });
  }
}
