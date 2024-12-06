import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
