import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { InstructorsCatalogueComponent } from './pages/instructors/instructors-catalogue/instructors-catalogue.component';
import { SingleInstructorComponent } from './pages/instructors/single-instructor/single-instructor.component';
import { SingleClassComponent } from './pages/videos/single-class/single-class.component';
import { VideosCatalogueComponent } from './pages/videos/videos-catalogue/videos-catalogue.component';
import { BlogComponent } from './pages/blogs/blog/blog.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SingleBlogComponent } from './pages/blogs/single-blog/single-blog.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Default route (empty path)
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'classes', component: VideosCatalogueComponent },
  { path: 'instructores', component: InstructorsCatalogueComponent },
  { path: 'instructores/:id', component: SingleInstructorComponent },
  { path: 'user-settings', component: UserProfileComponent },
  {path: 'iniciar-sesion', component: SignInComponent},
  {path: 'subscribirse', component: SignUpComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Catch-all for invalid routes (404)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
