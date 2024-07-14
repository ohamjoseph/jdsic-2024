import { Component } from '@angular/core';
import {TpSectionComponent} from "../tp-section/tp-section.component";

@Component({
  selector: 'app-instruction',
  standalone: true,
    imports: [
        TpSectionComponent
    ],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css'
})
export class InstructionComponent {

}
