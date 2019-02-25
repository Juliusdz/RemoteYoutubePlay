import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-play-window',
  templateUrl: './play-window.component.html',
  styleUrls: ['./play-window.component.scss']
})
export class PlayWindowComponent implements OnInit {

  source;
  youtubeUrl;
  height = window.innerHeight
  width = window.innerWidth

  constructor(private afs: AngularFirestore, private embedService: EmbedVideoService){}

  ngOnInit() { 
    this.afs.doc('messages/1').valueChanges().subscribe((val: any) => {
      if(val) {
        this.youtubeUrl = val.link;
        this.source = this.embedService.embed(this.youtubeUrl, { attr: { allow: 'autoplay', class: 'video', frameborder: '0', width: this.width, height: this.height }, query: { autoplay: 1 } } )
      }
    })
  }
  
}
