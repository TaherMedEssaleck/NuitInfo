import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  selectedHumanIndex: number | null = null; // Index de l'image "humain" sélectionnée

  // Fonction pour afficher l'image "human" correspondant à l'index cliqué
  displayHumanBox(index: number): void {
    this.selectedHumanIndex = index; // Met à jour l'index sélectionné
  }

  // Ferme la boîte "humain"
  closeHumanBox(): void {
    this.selectedHumanIndex = null;
  }
}
