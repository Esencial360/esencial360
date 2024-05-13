import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-instructor',
  templateUrl: './single-instructor.component.html',
  styleUrl: './single-instructor.component.css'
})
export class SingleInstructorComponent implements OnInit {
  instructorId: any
  bannerImageUrl = 'assets/images/banner-image.jpg';
  instagramIconUrl = 'assets/images/instagram-icon.png';
  globeIconUrl = 'assets/images/globe-icon.png';
  profileImageUrl = 'assets/images/profile-image.jpg';
  instagramUrl = 'https://www.instagram.com/your-instagram-handle';
  websiteUrl = 'https://www.your-website.com';
  
  constructor(private route: ActivatedRoute) {}

  @Input() imageUrl: string = '../../../../assets/images/yoga.jpg'; // Placeholder image URL (replace with your actual image)
  @Input() name: string = 'Name lastname';
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  ngOnInit() {
    console.log('single initialized');
    
    this.route.paramMap.subscribe(params => {
      this.instructorId = params.get('id');
      // fetch instructor details based on the instructorId
    });
  }

}
