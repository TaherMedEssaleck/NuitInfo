import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.css'],
})
export class ImageTextComponent {
  @Input() imageUrl: number = 1; // Numéro de l'image (1, 2, etc.)
  @Input() type: 'humain' | 'ocean' = 'humain'; // Type d'image ('humain' ou 'ocean')

  // Listes de textes pour les deux types
  // Définitions pour les relations humaines avec les composants marins
  humainText: string[] = [
    'Le cœur pompe le sang dans tout le corps, tout comme les courants océaniques distribuent la chaleur, l’oxygène et les nutriments à travers le globe.',
    'Le foie détoxifie et traite les substances dans le corps, semblable à l’océan qui lutte pour filtrer et faire face à la pollution plastique.',
    'Les intestins hébergent des bactéries bénéfiques qui traitent les nutriments, comme les écosystèmes marins qui soutiennent la biodiversité pour maintenir la vie océanique.',
    'Les reins filtrent les toxines du sang, maintenant l’équilibre dans le corps, tout comme les récifs coralliens filtrent et protègent les écosystèmes marins.',
    'Les poumons assurent l’échange gazeux, apportant de l’oxygène au corps et éliminant le dioxyde de carbone, à l’image du phytoplancton qui produit de l’oxygène dans l’océan.',
  ];

  // Définitions des composants océaniques
  oceanText: string[] = [
    'Les courants océaniques déplacent l’eau à travers la planète, distribuant la chaleur, l’oxygène et les nutriments essentiels à la vie marine.',
    'La pollution plastique désigne l’accumulation de déchets plastiques dans les océans, nuisant aux organismes et écosystèmes marins.',
    'Les écosystèmes marins sont des réseaux complexes d’organismes qui soutiennent la biodiversité et régulent les cycles de vie dans l’océan.',
    'Les récifs coralliens agissent comme des filtres naturels pour l’océan, offrant des habitats et soutenant la biodiversité marine.',
    'Le phytoplancton est composé de minuscules plantes dans l’océan qui réalisent la photosynthèse, produisant de l’oxygène et absorbant le dioxyde de carbone.',
  ];
  // Méthode pour générer le chemin de l'image en fonction du type et de l'index
  getImagePath(): string {
    return `assets/${this.type}/${this.imageUrl}`; // Construction du chemin de l'image
  }

  // Méthode pour récupérer le texte correspondant à l'image et au type
  getText(): string {
    if (this.type === 'humain') {
      return this.humainText[this.imageUrl - 1]; // La première image correspond au texte[0]
    } else {
      return this.oceanText[this.imageUrl - 1]; // Même logique pour l'océan
    }
  }
}
