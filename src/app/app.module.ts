
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SpotifywidgetComponent } from './spotifywidget/spotifywidget.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from './tabs/about/about.component';

import { JsonInfoService } from './json-info.service';
import { PersonalComponent } from './tabs/personal/personal.component';
import { ExperienceModule } from './experience/experience.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PersonalComponent,
    SpotifywidgetComponent,
    HeaderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    BrowserModule,
    ExperienceModule
  ],
  providers: [
    JsonInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
