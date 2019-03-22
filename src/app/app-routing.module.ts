import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
