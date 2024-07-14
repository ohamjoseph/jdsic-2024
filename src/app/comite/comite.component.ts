import { Component } from '@angular/core';
import {TpSectionComponent} from "../tp-section/tp-section.component";

@Component({
  selector: 'app-comite',
  standalone: true,
    imports: [
        TpSectionComponent
    ],
  templateUrl: './comite.component.html',
  styleUrl: './comite.component.css'
})
export class ComiteComponent {

}
