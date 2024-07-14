import {Component, NgModule} from '@angular/core';
import {Section2Component} from "../section2/section2.component";
import {CountDownComponent} from "../count-down/count-down.component";
import {MapComponent} from "../map/map.component";
import {PartenairesComponent} from "../partenaires/partenaires.component";
import {CommonModule} from "@angular/common";
import {ProgrammeComponent} from "../programme/programme.component";
import {DommaineComponent} from "../dommaine/dommaine.component";
import {ComiteComponent} from "../comite/comite.component";
import {InstructionComponent} from "../instruction/instruction.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [Section2Component, MapComponent, PartenairesComponent, CommonModule, ProgrammeComponent, DommaineComponent, ComiteComponent, InstructionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    images = [
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/1Fichier%201.png?alt=media&token=77821755-fa90-4a10-b52d-563c0c2102af', alt: 'Image 1' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/Fichier%203.png?alt=media&token=85b267a0-f933-41e3-ba85-ae51085c01d1', alt: 'Image 2' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/Fichier%202.png?alt=media&token=19efa1e9-2c02-494b-b8e4-aa392ad917f8', alt: 'Image 3' },
        // Ajoutez autant d'images que nécessaire
    ];

}
