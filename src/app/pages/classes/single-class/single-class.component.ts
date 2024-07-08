import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BunnystreamService } from '../../../shared/services/bunny-stream.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../../../shared/dialog/dialog.component';

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
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private router: Router
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
        const link = `https://iframe.mediadelivery.net/embed/263508/${this.videos.guid}?autoplay=false&loop=false&muted=false&preload=false&responsive=true`;
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(link);
        console.log(this.link)
      },
      (error) => {
        console.error('Error retrieving videos:', error);
      }
    );
  }

  deleteVideo() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Delete Video',
        message: 'Are you sure you want to delete this video?',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        onConfirm: () => {

          this.bunnystreamService.deleteVideo(this.videoId).subscribe(
            (response) => {
              this.router.navigateByUrl('/')
              console.log('Success deleting video:', response)
            },
            (error) => {
              console.error('Error retrieving videos:', error);
            }
          );
        }
      } as DialogData
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle result (true if confirmed, false if canceled)
    });
  }
}
