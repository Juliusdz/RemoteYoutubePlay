import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { keys } from '../../keys';

@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.scss']
})
export class SearchVideosComponent {
  videos: Array<any>;
  searchTerm: string;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient) { }

  search() {
    this.http.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=" + this.searchTerm + "&type=video&key=" + keys.youtubeAPIKey)
      .subscribe((res:any) => {
        this.videos = res.items
      });
  }

  selectVideo(videoId) {
    let link = "https://youtube.com/watch?v=" + videoId

    const data = {
      id: 1,
      link
    }

    this.afs.doc(`messages/1`)
      .update(data)
      .catch(() => {
        this.afs.doc(`messages/1`)
          .set(data);
      });
  }

  stopPlaying() {
    this.afs.doc(`messages/1`).update({id: 1, link: 'http://stopTheVideoPleasekjfcjhgcvhjgv'})
  }

  searchVideos() {
    this.search();
  }    

}
