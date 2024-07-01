import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolling-banner',
  templateUrl: './scrolling-banner.component.html',
  styleUrl: './scrolling-banner.component.css'
})
export class ScrollingBannerComponent {

  logos = [
    { src: '../../../assets/images/png-transparent-lululemon-hd-logo.png', alt: 'Framer' },
    { src: '../../../assets/images/png-transparent-lululemon-hd-logo.png', alt: 'Flow the Sun' }
  ];

}
