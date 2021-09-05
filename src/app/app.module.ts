import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
//import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
  //  FontAwesomeModule
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'archive/:year/:month', component: ArchiveComponent},
      {path: '**', component: NotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /* constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  } */

}
