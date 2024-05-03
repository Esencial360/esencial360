import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Blog {
  id: number,
  title: string,
  summary: string,
  body: string,
  image: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogs: Blog[] = []

  @Input()
  blogSelected!: string;

  constructor(private router: Router){}

  ngOnInit(): void {
    console.log('blogPage');
    this.blogs = [
      {
        id: 1,
        title: 'blog1',
        summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
        body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
        image: 'path/to/image'
      },
      {
        id: 2, 
        title: 'blog2',
        summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
        body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
        image: 'path/to/image'
      },
      {
        id: 3, 
        title: 'blog3',
        summary: 'lorem impsum lorem impsum lorem impsum lorem impsum',
        body: 'lorem impsum lorem impsumlorem impsumlorem impsumlorem impsumlorem impsumlorem impsum lorem impsumlorem impsum lorem impsumlorem impsum',
        image: 'path/to/image'
      },
    ]
  }

  
  onNavigateToBlog(id: number) {
    this.router.navigate([`/blog/${id}`])
  }
}
