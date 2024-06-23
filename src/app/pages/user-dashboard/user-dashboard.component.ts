import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BunnystreamService } from '../../shared/services/bunny-stream.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EmailService } from '../../shared/services/email.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  videos!: any[];
  links: SafeResourceUrl[] = [];
  collectionList: any[] = []

  constructor(
    public authService: AuthService,
    private bunnystreamService: BunnystreamService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private emailService: EmailService
  ) {}

  async ngOnInit() {
    this.authService.user$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((user) => {
      if (user) {
        console.log('User:', user);
        // Access the user's role(s) from the user object
        const roles = user['https://dev-agnj33flhghfk2oe.us.auth0.com/roles'];
        console.log('User roles:', roles);
        // Perform any necessary actions based on the user's role(s)
      }
    });
    // this.getVideos();
    this.getCollectionList();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onUploadVideo() {
    this.router.navigateByUrl(
      '/nuevo-video'
    )
  }


  sendTestEmail() {
    const emailData = {
      to: 'pablosalcido1@gmail.com',
      subject: 'Test Email',
      text: 'This is a test email.',
      html: '<p>This is a <strong>test</strong> email.</p>'
    };
    this.emailService.sendEmail(emailData).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        // Handle success (e.g., show a success message)
      },
      error: (error) => {
        console.error('Error sending email:', error);
        // Handle error (e.g., show an error message)
      }
    });
  }

  // getVideos() {
  //   this.bunnystreamService.getVideosList().subscribe(
  //     (response: any) => {
  //       this.videos = response.items;
  //       console.log(this.videos);
  //       console.log(this.videos[0].guid);
  //       this.links = this.videos.map((video) => {
  //         const link =
  //           'https://iframe.mediadelivery.net/embed/248742/' +
  //           video.guid +
  //           '?autoplay=true&loop=false&muted=false&preload=true&responsive=true';
  //         return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  //       });
  //     },
  //     (error) => {
  //       console.error('Error retrieving videos:', error);
  //     }
  //   );
  // }

  getCollectionList() {
    this.bunnystreamService.getCollectionList().subscribe(
      (response: any) => {
       this.collectionList = response.items;
       console.log(this.collectionList)
      },
      (error) => {
        console.error('Error retrieving collection:', error);
      }
    );
  }
}
