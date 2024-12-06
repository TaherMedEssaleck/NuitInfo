import { Component } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent {
  podcasts = [
    { title: 'Frederic Le Moigne - Part 1', url: 'assets/Fredeeric_Le_Moigne.mp3' },
    { title: 'Florian Sevellec - Part 2', url: 'assets/s_Florian_Sevellec.mp3' }

  ];

  currentPodcast: any = null;
  jingle = 'assets/jingle.mp3';

  playPodcast(podcast: any) {
    this.currentPodcast = podcast;
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
      audioPlayer.src = this.jingle;
      audioPlayer.play();
      audioPlayer.onended = () => {
        audioPlayer.src = podcast.url;
        audioPlayer.play();
      };
    }
  }

  onAudioEnd() {
    this.currentPodcast = null;
  }
}
