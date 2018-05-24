import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MovieService } from './movie.service';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';


const appRoutes: Routes = [
 { path : '',
 component: HomeComponent
},
{path: 'movie/:movieID',
component: MovieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
