import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.css']
})
export class ImageTextComponent {
  @Input() imageUrl: number = 1;  // Numéro de l'image (1, 2, etc.)
  @Input() type: 'humain' | 'ocean' = 'humain';  // Type d'image ('humain' ou 'ocean')

  // Listes de textes pour les deux types
  humainText: string[] = [
    'Texte 1 pour Humain',
    'Texte 2 pour Humain',
    'Texte 3 pour Humain',
    'Texte 4 pour Humain',
    'Texte 5 pour Humain'
  ];

  oceanText: string[] = [
    'Texte 1 pour Océan',
    'Texte 2 pour Océan',
    'Texte 3 pour Océan',
    'Texte 4 pour Océan',
    'Texte 5 pour Océan'
  ];

  // Méthode pour générer le chemin de l'image en fonction du type et de l'index
  getImagePath(): string {
    return `assets/${this.type}/${this.imageUrl}`;  // Construction du chemin de l'image
  }

  // Méthode pour récupérer le texte correspondant à l'image et au type
  getText(): string {
    if (this.type === 'humain') {
      return this.humainText[this.imageUrl - 1];  // La première image correspond au texte[0]
    } else {
      return this.oceanText[this.imageUrl - 1];  // Même logique pour l'océan
    }
  }
}
