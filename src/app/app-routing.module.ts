import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { InstructorsCatalogueComponent } from './pages/instructors/instructors-catalogue/instructors-catalogue.component';
import { SingleInstructorComponent } from './pages/instructors/single-instructor/single-instructor.component';
import { SingleClassComponent } from './pages/videos/single-class/single-class.component';
import { VideosCatalogueComponent } from './pages/videos/videos-catalogue/videos-catalogue.component';

const routes: Routes = [
{path: '', component: LandingComponent },
{path: 'about', component: AboutComponent },
{path: '', component: LandingComponent },
{path: '', component: LandingComponent },
{path: '', component: LandingComponent },
{path: '', component: LandingComponent },
{path: '', component: LandingComponent },
{path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
