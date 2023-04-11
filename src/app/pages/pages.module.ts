import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { CommonComponent } from '../core/common/common.component';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';


@NgModule({
  declarations: [
    CommonComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    AboutComponent,
    ContactComponent,
    OurCoursesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
