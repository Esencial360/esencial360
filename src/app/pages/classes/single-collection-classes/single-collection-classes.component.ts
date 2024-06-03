import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BunnystreamService } from '../../../shared/services/bunny-stream.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { concatMap, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-single-collection-classes',
  templateUrl: './single-collection-classes.component.html',
  styleUrl: './single-collection-classes.component.css',
})
export class SingleCollectionClassesComponent implements OnInit {
  collectionList!: any[];

  collectionName: any;

  matchingCollection!: any[];

  videos!: any[];

  links: SafeResourceUrl[] = [];

  constructor(
    private route: ActivatedRoute,
    private bunnystreamService: BunnystreamService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.collectionName = params.get('id');
      console.log(this.collectionName);
    });
    this.getCollectionList();
  }

  getCollectionList() {
    this.bunnystreamService.getCollectionList().subscribe(
      (response: any) => {
        this.collectionList = response.items;
        console.log(this.collectionList);
        function findMatchingObject(dataArray: any, name: string) {
          return dataArray.find((item: { name: string }) => item.name === name);
        }
        this.matchingCollection = findMatchingObject(
          this.collectionList,
          this.collectionName
        );
        // this.getVideosOfCollection(this.matchingCollection);
        this.getVideo(this.matchingCollection);
      },
      (error) => {
        console.error('Error retrieving collection:', error);
      }
    );
  }

  getVideo(videoIds: any) {
    if (videoIds.videoCount === 0) {
    } else if (videoIds.videoCount === 1) {
      this.bunnystreamService.getVideo(videoIds.previewVideoIds).subscribe(
        (response: any) => {
          this.videos = [response];
          this.links = this.videos.map((video) => {
            const link = `https://iframe.mediadelivery.net/embed/248742/${video.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`;
            return this.sanitizer.bypassSecurityTrustResourceUrl(link);
          });
        },
        (error) => {
          console.error('Error retrieving videos:', error);
        }
      );
    } else if (videoIds.videoCount > 1) {
      const videoIdsArray = videoIds.previewVideoIds.split(',');
      from(videoIdsArray)
        .pipe(
          concatMap((videoId) => this.bunnystreamService.getVideo(videoId)),
          map((video) =>
            this.sanitizer.bypassSecurityTrustResourceUrl(
              `https://iframe.mediadelivery.net/embed/248742/${video.guid}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`
            )
          ), // Create the sanitized link
          toArray()
        )
        .subscribe({
          next: (links) => {
            this.links = links;
          },
          error: (error) => {
            console.error('Error retrieving videos:', error);
          },
        });
    }
  }
}
