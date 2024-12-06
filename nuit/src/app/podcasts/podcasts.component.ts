import { Component } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent {
  // Liste des podcasts avec l'option audio ou vidéo
  podcasts = [
    { id: 1, title: 'Florian Sevellec - Part 1', url: 'assets/s_Florian_Sevellec.mp4', isVideo: true },
    { id: 2, title: 'Frederic Le Moigne - Part 1', url: 'assets/s_Frederic_Le_Moigne_-_Part_1.mp4', isVideo: true },
    { id: 3, title: 'Florian Sevellec - Oona Layolle', url: 'assets/s_Florian_Sevellec_-_Oona_Layolle.mp4', isVideo: true },
    { id: 4, title: 'Frederic Le Moigne - Part 2', url: 'assets/s_Frederic_Le_Moigne_-_Part_2.mp4', isVideo: true },
    { id: 5, title: 'Frederic Le Moigne - Part 1 Audio', url: 'assets/Fredeeric_Le_Moigne.mp3', isVideo: false },
    { id: 6, title: 'Florian Sevellec - Part 2 Audio', url: 'assets/s_Florian_Sevellec.mp3', isVideo: false }
  ];

  currentPodcast: any = null;

  // Gère la lecture des podcasts
  playPodcast(podcast: any) {
    this.currentPodcast = podcast;
  }

  // Fonction exécutée à la fin de la lecture de l'audio ou vidéo
  onMediaEnd() {
    this.currentPodcast = null;
  }
}
