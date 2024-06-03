import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface Category {
  name: string;
  image: string;
}

@Component({
  selector: 'app-classes-catalogue',
  templateUrl: './classes-catalogue.component.html',
  styleUrl: './classes-catalogue.component.css'
})
export class ClassesCatalogueComponent implements OnInit {
   @Input()
   collectionList: any[] = []

   constructor(private router: Router, private location: Location){}

   async ngOnInit(){
     await console.log(this.collectionList)
   }

   onSingleCollection(id: string) {
    console.log('clicked')
    this.router.navigate([`/collection/${id}`]).then((navigationSuccess) => {
      if (navigationSuccess) {
        console.log('Navigation to collection successful');
      } else {
        console.error('Navigation to collection failed');
      }
    })
    .catch((error) => {
      console.error(`An error occurred during navigation: ${error.message}`);
    });
   }

   goBack() {
    this.location.back()
  }

}
