import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-tp-section',
  standalone: true,
    imports: [
        NgIf,
        NgClass
    ],
  templateUrl: './tp-section.component.html',
  styleUrl: './tp-section.component.css'
})
export class TpSectionComponent{
    @Input() title!: string;
    @Input() subtitle!: string;
    @Input() titleColor: string ="";


}
