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
  // Définitions pour les relations humaines avec les composants marins
 humainText: string[] = [
  'The heart pumps blood throughout the body, just like ocean currents distribute heat, oxygen, and nutrients across the globe.',
  'The liver detoxifies and processes substances in the body, analogous to the ocean struggling to filter and cope with plastic pollution.',
  'The intestines host beneficial bacteria that process nutrients, akin to marine ecosystems hosting biodiversity to sustain ocean life.',
  'The kidneys filter toxins from the blood, maintaining balance in the body, much like coral reefs filter and protect marine ecosystems.',
  'The lungs perform gas exchange, supplying oxygen to the body and removing carbon dioxide, similar to phytoplankton producing oxygen in the ocean.',
];

// Définitions des composants océaniques
 oceanText: string[] = [
  'Ocean currents move water across the planet, distributing heat, oxygen, and nutrients vital to marine life.',
  'Plastic pollution refers to the accumulation of plastic waste in oceans, harming marine organisms and ecosystems.',
  'Marine ecosystems are complex networks of organisms that sustain biodiversity and regulate life cycles in the ocean.',
  'Coral reefs act as natural filters for the ocean, providing habitats and supporting marine biodiversity.',
  'Phytoplankton are tiny plants in the ocean that perform photosynthesis, producing oxygen and absorbing carbon dioxide.',
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
