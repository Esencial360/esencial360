import { Component, OnInit } from '@angular/core';

interface ClassOverview {
  image: string, 
  title: string, 
  description: string, 
  link: string
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  classes: ClassOverview[] = []

  constructor(){}

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
  }

}
