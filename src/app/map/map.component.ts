import {AfterViewInit, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
    private map!: any;
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    private initMap(L:any): void {
        this.map = L.map('map', {
            center: [ 12.3173378,-1.5056828 ],
            zoom: 16
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 30,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);
        var marker = L.marker([ 12.3173378,-1.5056828 ]).addTo(this.map);
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            // Code exécuté uniquement dans le navigateur
            import('leaflet').then((L) => {
                this.initMap(L)
            }).catch(error => {
                console.error('Failed to import Leaflet', error);
            });
        }
       // this.initMap(L)
    }


}
