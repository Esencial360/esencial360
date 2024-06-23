import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { InstructorsCatalogueComponent } from './pages/instructors/instructors-catalogue/instructors-catalogue.component';
import { SingleInstructorComponent } from './pages/instructors/single-instructor/single-instructor.component';
import { VideosCatalogueComponent } from './pages/videos/videos-catalogue/videos-catalogue.component';
import { BlogComponent } from './pages/blogs/blog/blog.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SingleBlogComponent } from './pages/blogs/single-blog/single-blog.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewBlogComponent } from './pages/blogs/new-blog/new-blog.component';
import { NewsComponent } from './pages/news/news/news.component';
import { NewNewsComponent } from './pages/news/new-news/new-news.component';
import { SingleNewsComponent } from './pages/news/single-news/single-news.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { InstructorSingUpComponent } from './pages/instructor-sing-up/instructor-sing-up.component';
import { SingleCollectionClassesComponent } from './pages/classes/single-collection-classes/single-collection-classes.component';
import { UploadVideoComponent } from './pages/classes/upload-video/upload-video.component';
import { SingleClassComponent } from './pages/classes/single-class/single-class.component';
import { ClassStatisticsComponent } from './pages/classes/class-statistics/class-statistics.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Default route (empty path)
  // { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'classes', component: VideosCatalogueComponent },
  { path: 'instructores', component: InstructorsCatalogueComponent },
  { path: 'instructores/:id', component: SingleInstructorComponent },
  { path: 'user-settings', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'iniciar-sesion', component: SignInComponent },
  { path: 'subscribirse', component: SignUpComponent },
  { path: 'olvido', component: ForgotComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nuevo-blog', component: NewBlogComponent, canActivate: [AuthGuard] },
  { path: 'noticias', component: NewsComponent },
  { path: 'nueva-noticia', component: NewNewsComponent, canActivate: [AuthGuard] },
  { path: 'noticias/:id', component: SingleNewsComponent,  },
  {path: 'carrera-instructor', component: InstructorSingUpComponent}, 
  {path: 'ajustes', component: UserProfileComponent},
  {path: 'nuevo-video', component: UploadVideoComponent},
  {path: 'collection/:id', component: SingleCollectionClassesComponent},
  {path: 'collection/:collectionName/:id', component: SingleClassComponent},
  {path: 'estadisticas', component: ClassStatisticsComponent}, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Catch-all for invalid routes (404)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
