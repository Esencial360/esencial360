import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  id: number;
  imageUrl: string;
  title: string;
}

interface Category {
  name: string;
  items: Item[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  categories: Category[] = []

  @Input()
  blogSelected!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
   this.categories = [
    {
      name: 'MOVEMENT',
      items: [
        {
          id: 1,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'The Best Pilates Reformer Exercises to Strength & Flexibility Training'
        },
        {
          id: 2,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'Pilates Reformer 101: Exercises, Benefits & More'
        },
        // Add more items for the 'MOVEMENT' category
      ]
    },
    {
      name: 'MINDFULNESS',
      items: [
        {
          id: 3,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'What Is Body? Heres What You Need to Know'
        },
        {
          id: 4,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: '10 Guided Meditations for Anxiety and Stress'
        },
        // Add more items for the 'MINDFULNESS' category
      ]
    },
    {
      name: 'LIFESTYLE',
      items: [
        {
          id: 5,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'How to Balance Your Hormones: 4 Tips From a Naturopath'
        },
        {
          id: 6,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'What to Wear to Hot Yoga'
        },
        {
          id: 7,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'Cycle Syncing: Exercise, Nutrition & Wellness in Every Phase'
        },
        // Add more items for the 'LIFESTYLE' category
      ]
    },
    {
      name: 'NEWS',
      items: [
        {
          id: 8,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'New Live Classes on Alo Moves'
        },
        {
          id: 9,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'Alo Moves and the American Red Cross Partner to Bring Free Classes to Frontline Workers'
        },
        {
          id: 10,
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: '3 Things You Can Do Right Now to Help Save Our Oceans'
        },
        // Add more items for the 'NEWS' category
      ]
    }
    ];
  }

  
  onNavigateToBlog(id: number) {
    this.router.navigate([`/blog/${id}`]).then(navigationSuccess => {
      if (navigationSuccess) {
        console.log(`Navigation to blog ${id} successful`);
      } else {
        console.error(`Navigation to blog ${id} failed`); 
      }
    }).catch(error => {
      console.error(`An error occurred during navigation: ${error.message}`);
    })
  }
}
