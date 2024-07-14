import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DotLottie } from '@lottiefiles/dotlottie-web';

interface Category {
  name: string;
  image: string;
}

@Component({
  selector: 'app-classes-catalogue',
  templateUrl: './classes-catalogue.component.html',
  styleUrl: './classes-catalogue.component.css',
})
export class ClassesCatalogueComponent implements OnInit {
  @Input()
  collectionList: any[] = [];

  dotLottie?: any;

  constructor(private router: Router, private location: Location) {}

  async ngOnInit() {
    await console.log(this.collectionList);
    // this.dotLottie = new DotLottie({
    //   autoplay: true,
    //   loop: true,
    //   canvas: document.querySelector('#dotlottie-canvas'),
    //   src: 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie', // or .json file
    // });
  }

  onSingleCollection(id: string) {
    console.log('clicked');
    this.router
      .navigate([`/collection/${id}`])
      .then((navigationSuccess) => {
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
    this.location.back();
  }
}
