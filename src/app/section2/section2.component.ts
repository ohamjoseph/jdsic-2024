import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {TpSectionComponent} from "../tp-section/tp-section.component";


@Component({
  selector: 'app-section2',
  standalone: true,
    imports: [CardComponent, TpSectionComponent],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

}
