import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { LandingComponent } from './pages/landing/landing.component';
import { VideosCatalogueComponent } from './pages/videos/videos-catalogue/videos-catalogue.component';
import { InstructorsCatalogueComponent } from './pages/instructors/instructors-catalogue/instructors-catalogue.component';
import { SingleInstructorComponent } from './pages/instructors/single-instructor/single-instructor.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BlogComponent } from './pages/blogs/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleBlogComponent } from './pages/blogs/single-blog/single-blog.component';
import { SectionSneakPeakComponent } from './components/section-sneak-peak/section-sneak-peak.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { InstructorFilterComponent } from './shared/instructor-filter/instructor-filter.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component'; 
import { HttpClientModule, provideHttpClient, withFetch  } from '@angular/common/http';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewBlogComponent } from './pages/blogs/new-blog/new-blog.component';
import { NewsComponent } from './pages/news/news/news.component';
import { NewNewsComponent } from './pages/news/new-news/new-news.component';
import { SingleNewsComponent } from './pages/news/single-news/single-news.component';
import { provideAuth0, AuthModule } from '@auth0/auth0-angular';
import { InstructorSingUpComponent } from './pages/instructor-sing-up/instructor-sing-up.component';
import { ClassesCatalogueComponent } from './pages/classes/classes-catalogue/classes-catalogue.component';
import { SingleCollectionClassesComponent } from './pages/classes/single-collection-classes/single-collection-classes.component';
import { UploadVideoComponent } from './pages/classes/upload-video/upload-video.component';
import { SingleClassComponent } from './pages/classes/single-class/single-class.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ClassStatisticsComponent } from './pages/classes/class-statistics/class-statistics.component';
import { environment } from '../environments/environment.development';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    LandingComponent,
    VideosCatalogueComponent,
    SingleClassComponent,
    InstructorsCatalogueComponent,
    SingleInstructorComponent,
    UserProfileComponent,
    BlogComponent,
    AboutComponent,
    SingleBlogComponent,
    SectionSneakPeakComponent,
    PageTitleComponent,
    InstructorFilterComponent,
    SignInComponent,
    SignUpComponent,
    UserDashboardComponent,
    ForgotComponent,
    ContactComponent,
    NewBlogComponent,
    NewsComponent,
    NewNewsComponent,
    SingleNewsComponent,
    InstructorSingUpComponent,
    ClassesCatalogueComponent,
    SingleCollectionClassesComponent,
    UploadVideoComponent,
    DialogComponent,
    ClassStatisticsComponent,
    PricingPlanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()), 
    [
      provideAuth0({
        domain: environment.auth0.domain,
        clientId: environment.auth0.clientId,
        authorizationParams: {
          redirect_uri: environment.auth0.redirectUri,
        }
      }),
    
    provideAnimationsAsync()
  ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
