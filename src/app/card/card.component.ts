import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input()
    nom: string = "";
    @Input()
    titre: string = "";
    @Input()
    image: string = "";

}
