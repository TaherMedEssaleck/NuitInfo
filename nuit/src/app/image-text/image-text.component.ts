import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.css']
})
export class ImageTextComponent {
  @Input() imageUrl: string = ''; // URL de l'image entrée par le parent
  @Input() text: string = ''; // Texte à afficher
  @Input() type: 'humain' | 'ocean' = 'humain';
  constructor() { }

  getImagePath(): string {
    return `assets/${this.type}/${this.imageUrl}`;
  }
}
