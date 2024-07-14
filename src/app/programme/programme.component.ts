import { Component } from '@angular/core';
import {TpSectionComponent} from "../tp-section/tp-section.component";

@Component({
  selector: 'app-programme',
  standalone: true,
    imports: [
        TpSectionComponent
    ],
  templateUrl: './programme.component.html',
  styleUrl: './programme.component.css'
})
export class ProgrammeComponent {

}
