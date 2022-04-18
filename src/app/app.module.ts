import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileAppComponent } from './profile-app/profile-app.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileAppComponent,
    ProfileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
