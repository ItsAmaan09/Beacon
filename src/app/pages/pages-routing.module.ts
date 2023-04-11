import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'our-courses',
      component: OurCoursesComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
