import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../../shared/services/instructor.service';
import { Instructor } from '../../../shared/Models/Instructor';
import { BunnystreamService } from '../../../shared/services/bunny-stream.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { concatMap, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-single-instructor',
  templateUrl: './single-instructor.component.html',
  styleUrl: './single-instructor.component.css',
})
export class SingleInstructorComponent implements OnInit {
  instructorId: any;
  bannerImageUrl = 'assets/images/banner-image.jpg';
  instagramIconUrl = 'assets/images/instagram-icon.png';
  globeIconUrl = 'assets/images/globe-icon.png';
  profileImageUrl = 'assets/images/profile-image.jpg';
  instagramUrl = 'https://www.instagram.com/your-instagram-handle';
  websiteUrl = 'https://www.your-website.com';
  instructor!: Instructor;
  videos!: any[];

  links: SafeResourceUrl[] = [];

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService,
    private bunnystreamService: BunnystreamService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  @Input() imageUrl: string = '../../../../assets/images/yoga.jpg';
  @Input() name: string = 'Name lastname';
  @Input() description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  async ngOnInit() {
    console.log('single initialized');
    this.route.paramMap.subscribe((params) => {
      this.instructorId = params.get('id');
      // fetch instructor details based on the instructorId
    });

    await this.instructorService.getInstructor(this.instructorId).subscribe(
      (response) => {
        console.log('Instructor get successfully', response);
        this.instructor = response;
        console.log(this.instructor.videos);
        this.getVideo(this.instructor.videos);
      },
      (error) => {
        console.error('Instructor get error', error);
      }
    );
  }

  // async getVideo(videoIds: any) {
  //   if (videoIds.length === 0) {
  //   } else if (videoIds.length === 1) {
  //     await this.bunnystreamService.getVideo(videoIds).subscribe(
  //       (response: any) => {
  //         this.videos = [response];
  //         console.log(this.videos)
  //         this.links = this.videos.map((video) => {
  //           const link = `https://iframe.mediadelivery.net/embed/263508/${video.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;
  //           return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  //         });
  //       },
  //       (error) => {
  //         console.error('Error retrieving videos:', error);
  //       }
  //     );
  //   } else if (videoIds.length > 1) {
  //     from(videoIds)
  //       .pipe(
  //         concatMap((videoId) => this.bunnystreamService.getVideo(videoId)),
  //         map((video) =>
  //           this.sanitizer.bypassSecurityTrustResourceUrl(
  //             `https://iframe.mediadelivery.net/embed/263508/${video.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`
  //           )
  //         ),
  //         toArray()
  //       )
  //       .subscribe({
  //         next: (links) => {
  //           this.links = links;
  //           console.log(this.links)
  //           console.log(this.videos)
  //         },
  //         error: (error) => {
  //           console.error('Error retrieving videos:', error);
  //         },
  //       });
  //   }
  // }

  async getVideo(videoIds: any) {
    console.log(videoIds);

    if (videoIds.length === 0) {
    } else if (videoIds.length === 1) {
      from(videoIds)
        .pipe(
          concatMap((videoId) => this.bunnystreamService.getVideo(videoId)),
          map((video) => ({
            video: video,
            safeThumbnail: this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://vz-4422bc83-71b.b-cdn.net/${video.guid}/thumbnail.jpg`
            ),
          })),
          toArray()
        )
        .subscribe({
          next: (videos) => {
            this.videos = videos;
            console.log(this.videos);
          },
          error: (error) => {
            console.error('Error retrieving videos:', error);
          },
        });
    } else if (videoIds.length > 1) {
      from(videoIds)
        .pipe(
          concatMap((videoId) => this.bunnystreamService.getVideo(videoId)),
          map((video) => ({
            video: video,
            safeThumbnail: this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://vz-cbbe1d6f-d6a.b-cdn.net/${video.guid}/thumbnail.jpg`
            ),
          })),
          toArray()
        )
        .subscribe({
          next: (videos) => {
            this.videos = videos;
            console.log(this.videos);
          },
          error: (error) => {
            console.error('Error retrieving videos:', error);
          },
        });
    }
  }

  onWatchSingleClass(id: string) {
    // this.router.navigate([`/collection/${this.collectionName}/${id}`]).then((navigationSuccess) => {
    //   if (navigationSuccess) {
    //     console.log('Navigation to class successful');
    //   } else {
    //     console.error('Navigation to class failed');
    //   }
    // })
    // .catch((error) => {
    //   console.error(`An error occurred during navigation: ${error.message}`);
    // });
  }
}
