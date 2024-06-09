import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BunnystreamService } from '../../../shared/services/bunny-stream.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-class',
  templateUrl: './single-class.component.html',
  styleUrl: './single-class.component.css',
})
export class SingleClassComponent implements OnInit {
  videoId!: any;

  videos!: any;
  link!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private bunnystreamService: BunnystreamService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.videoId = params.get('id');
      console.log(this.videoId);
    });
    this.getVideo();
  }

  getVideo() {
    this.bunnystreamService.getVideo(this.videoId).subscribe(
      (response: any) => {
        this.videos = response;
        const link = `https://iframe.mediadelivery.net/embed/248742/${this.videos.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(link);
      },
      (error) => {
        console.error('Error retrieving videos:', error);
      }
    );
  }
}
