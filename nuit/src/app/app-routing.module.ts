import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'podcasts', component: PodcastsComponent },
  {path:'sea',component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
