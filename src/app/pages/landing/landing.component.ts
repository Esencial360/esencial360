import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ClassOverview {
  image: string, 
  title: string, 
  description: string, 
  link: string
}

interface InstructorsOverview {
  image: string, 
  name: string,
  title: string
}

interface BlogOverview {
  image: string, 
  title: string, 
  description: string,
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  classes: ClassOverview[] = []
  instructors: InstructorsOverview[] = []
  blogs: BlogOverview[] = []
  backgroundImageUrl = '../../../assets/images/yoga.jpg';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.classes = [
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'YOGA',
        description: 'Get lost in your flow state with every yoga variety, from Vinyasa to Hatha.',
        link: 'linktoclasses'
      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'FITNESS',
        description: 'Get lost in your flow state with every yoga variety, from Vinyasa to Hatha.',
        link: 'linkToClasses'
      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'MINDFULNESS',
        description: 'Level up your workout with Pilates, Barre, HIIT, and much more',
        link: 'linkToClasses'
      },
    ]

    this.instructors = [
      {
        image: '../../../assets/images/yoga.jpg',
        name: 'John Doe',
        title: 'Yoga Instructor'

      },
      {
        image: '../../../assets/images/yoga.jpg',
        name: 'John Doe',
        title: 'Yoga Instructor'

      },
      {
        image: '../../../assets/images/yoga.jpg',
        name: 'John Doe',
        title: 'Yoga Instructor'

      },
      {
        image: '../../../assets/images/yoga.jpg',
        name: 'John Doe',
        title: 'Yoga Instructor'

      },
      {
        image: '../../../assets/images/yoga.jpg',
        name: 'John Doe',
        title: 'Yoga Instructor'

      }
    ]
    this.blogs = [
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'CHECK IN WITH YOURSELF: 20 QUESTIONS FOR YOUR EMOTIONAL WELLNESS',
        description: 'Need some inspiration on questions for self-reflection? We asked a few of our Alo Moves '

      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'CHECK IN WITH YOURSELF: 20 QUESTIONS FOR YOUR EMOTIONAL WELLNESS',
        description: 'Need some inspiration on questions for self-reflection? We asked a few of our Alo Moves '

      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'CHECK IN WITH YOURSELF: 20 QUESTIONS FOR YOUR EMOTIONAL WELLNESS',
        description: 'Need some inspiration on questions for self-reflection? We asked a few of our Alo Moves '

      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'CHECK IN WITH YOURSELF: 20 QUESTIONS FOR YOUR EMOTIONAL WELLNESS',
        description: 'Need some inspiration on questions for self-reflection? We asked a few of our Alo Moves '

      },
      {
        image: '../../../assets/images/yoga.jpg',
        title: 'CHECK IN WITH YOURSELF: 20 QUESTIONS FOR YOUR EMOTIONAL WELLNESS',
        description: 'Need some inspiration on questions for self-reflection? We asked a few of our Alo Moves '

      },
    ]
  }

  navigateToBlog() {
    this.router.navigateByUrl('/blog').then(navigationSuccess => {
      if (navigationSuccess) {
        console.log('Navigation to blog page successful');
      } else {
        console.error('Navigation to blog page failed'); 
      }
    }).catch(error => {
      console.error(`An error occurred during navigation: ${error.message}`);
    });
  }

  navigateToInstructors() {
    this.router.navigateByUrl('/instructores').then(navigationSuccess => {
      if (navigationSuccess) {
        console.log('Navigation to instructores page successful');
      } else {
        console.error('Navigation to instructores page failed'); 
      }
    }).catch(error => {
      console.error(`An error occurred during navigation: ${error.message}`);
    });
  }

}
