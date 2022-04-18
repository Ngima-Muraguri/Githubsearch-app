import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileAppComponent } from './profile-app/profile-app.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileAppComponent,
    ProfileDataComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
