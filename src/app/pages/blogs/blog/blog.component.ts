import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

// interface Blog {
//   id: number,
//   title: string,
//   summary: string,
//   body: string,
//   image: string
// }
interface Item {
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
  // blogs: Blog[] = []

  @Input()
  blogSelected!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    // console.log('blogPage');
    // this.blogs = [
    //   {
    //     id: 1,
    //     title: 'blog1',
    //     summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
    //     body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
    //     image: 'path/to/image'
    //   },
    //   {
    //     id: 2, 
    //     title: 'blog2',
    //     summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
    //     body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
    //     image: 'path/to/image'
    //   },
    //   {
    //     id: 3, 
    //     title: 'blog3',
    //     summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
    //     body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
    //     image: 'path/to/image'
    //   },
    // ]
   this.categories = [
    {
      name: 'MOVEMENT',
      items: [
        {
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'The Best Pilates Reformer Exercises to Strength & Flexibility Training'
        },
        {
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
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'What Is Body? Heres What You Need to Know'
        },
        {
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
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'How to Balance Your Hormones: 4 Tips From a Naturopath'
        },
        {
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'What to Wear to Hot Yoga'
        },
        {
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
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'New Live Classes on Alo Moves'
        },
        {
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: 'Alo Moves and the American Red Cross Partner to Bring Free Classes to Frontline Workers'
        },
        {
          imageUrl: '../../../../assets/images/yoga.jpg',
          title: '3 Things You Can Do Right Now to Help Save Our Oceans'
        },
        // Add more items for the 'NEWS' category
      ]
    }
    ];
  }

  
  onNavigateToBlog(id: number) {
    this.router.navigate([`/blog/${id}`])
  }
}
