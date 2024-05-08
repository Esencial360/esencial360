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
import { SingleClassComponent } from './pages/videos/single-class/single-class.component';
import { InstructorsCatalogueComponent } from './pages/instructors/instructors-catalogue/instructors-catalogue.component';
import { SingleInstructorComponent } from './pages/instructors/single-instructor/single-instructor.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BlogComponent } from './pages/blogs/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleBlogComponent } from './pages/blogs/single-blog/single-blog.component';
import { SectionSneakPeakComponent } from './components/section-sneak-peak/section-sneak-peak.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
