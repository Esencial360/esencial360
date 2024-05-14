import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface PreviewInstructor {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
}

@Component({
  selector: 'app-instructors-catalogue',
  templateUrl: './instructors-catalogue.component.html',
  styleUrl: './instructors-catalogue.component.css'
})
export class InstructorsCatalogueComponent implements OnInit, OnDestroy {
  instructors: PreviewInstructor[] = []
  filteredInstructors: PreviewInstructor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.instructors = [
      {
        id: 1, 
        name: 'Bianca Wise',
        description: 'Bianca is an accredited Pilates instructor and certified clinical naturopath. Her love for movement started at a young age as she began dancing and attending...',
        imageUrl: '../../../../assets/images/yoga.jpg'
      },
      {
        id: 5, 
        name: 'Ashley Galvin',
        description: 'Ashley Galvin is a Yoga Instructor based out of Manhattan Beach, California. She is known...',
        imageUrl: '../../../../assets/images/yoga.jpg'
      },
      {
        id: 2, 
        name: 'Jacob Thompson',
        description: 'Jacob is a certified personal trainer and nutrition coach. He specializes in strength training and weight loss programs...',
        imageUrl: '../../../../assets/images/yoga.jpg'
      },
      {
        id: 3, 
        name: 'Sophia Martinez',
        description: 'Sophia is a renowned Zumba instructor with over 10 years of experience. Her high-energy classes are a fusion of dance and fitness...',
        imageUrl: '../../../../assets/images/yoga.jpg'
      },
      {
        id: 4, 
        name: 'Michael Davis',
        description: 'Michael is a former professional athlete and now a successful spin class instructor. His classes are intense and challenging...',
        imageUrl: '../../../../assets/images/yoga.jpg'
      }
    ];
    this.filteredInstructors = this.instructors;
  }

  onFilterChange(filter: string) {
    switch (filter) {
      case 'Most Popular':
        // Sort by popularity (you'll need to define the logic here)
        break;
      case 'Newest':
        // Sort by newest (you'll need to define the logic here)
        break;
      case 'A-Z':
        this.filteredInstructors = [...this.instructors].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  onInstructor(id: number) {
    this.router.navigate([`/instructores/${id}`])
    console.log('navigate');
    
  }
   ngOnDestroy() {
    console.log('InstructorsCatalogueComponent destroyed');
   }

}
