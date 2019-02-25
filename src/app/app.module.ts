import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireModule } from 'angularfire2';
import { PlayWindowComponent } from './play-window/play-window.component';

import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { SearchVideosComponent } from './search-videos/search-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayWindowComponent,
    SearchVideosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule, 
    EmbedVideo.forRoot(),
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
