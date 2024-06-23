import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BunnystreamService } from '../../../shared/services/bunny-stream.service';

@Component({
  selector: 'app-class-statistics',
  templateUrl: './class-statistics.component.html',
  styleUrl: './class-statistics.component.css'
})
export class ClassStatisticsComponent implements OnInit {

  videoId!: any;

  videos!: any;
  link!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private bunnystreamService: BunnystreamService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((params) => {
    //   this.videoId = params.get('id');
    //   console.log(this.videoId);
    // });
    this.getVideoStatistics();
  }

  getVideoStatistics() {
    this.bunnystreamService.getVideoStatistics().subscribe(
      (response: any) => {
        console.log(response)
      },
      (error) => {
        console.error('Error retrieving videos:', error);
      }
    );
  }


}
