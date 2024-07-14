import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TpSectionComponent} from "../tp-section/tp-section.component";

@Component({
  selector: 'app-partenaires',
  standalone: true,
    imports: [
        NgForOf,
        TpSectionComponent
    ],
  templateUrl: './partenaires.component.html',
  styleUrl: './partenaires.component.css'
})
export class PartenairesComponent {
    partenaires = [
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/UJKZ.png?alt=media&token=17b9fe7a-bb2c-4d15-a690-485deaf86fd0', alt: 'UJKZ' },
        { src: 'https://epo-edu.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-08-11-at-10.16.20-AM.png', alt: 'EPO' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/universite-norbert-zongo.jpg?alt=media&token=3390159a-56c9-44f4-b190-bdc4d48d8c58', alt: 'UNZ' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/430016861_774343294745132_7986081899897318264_n.jpg?alt=media&token=65488d06-1ea6-4751-9c6d-ba350e6be1a4', alt: 'MTDPCE' },
        { src: 'https://recifaso.org/wp-content/uploads/2020/04/logo2.jpg', alt: 'RECIF' },
        { src: 'https://recifaso.org/wp-content/uploads/2014/05/logo_ieee.png', alt: 'IEEE' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/cropped-logo-citadel-250x250-1.png.webp?alt=media&token=55e27f5d-4b77-4c85-93a5-af0968a6b541', alt: 'CITADEL' },
        // Ajoutez autant d'images que nécessaire
    ];

    sponsores = [
        { src: 'https://burkina24.com/wp-content/uploads/2018/05/bon-logo-arcep.jpg', alt: 'ARCEP' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/2C5330B8-BBDB-4A1F-BC3A-C6554877AA3D.jpeg?alt=media&token=7e93a95e-8baf-4ded-9d89-254fe8490e13', alt: 'CIL' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/378707461_675250188067539_7555189586487877614_n.jpg?alt=media&token=0239cf07-46ab-44ce-b4a2-b03efe5455d3', alt: 'ANSSI' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/logo_anptic_ok.png?alt=media&token=fd9a477b-e89a-4dc7-a1a0-1fa4cbfe339c', alt: 'ANPTIC' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/20220920115933!Logo_AUF.png?alt=media&token=4d35602a-aa8b-4a2b-bb06-0ca5fcf5fc3e', alt: 'AUF' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/LOGO-OPEN-BURKINA300.jpg?alt=media&token=3f0f59ce-29a3-423a-b2fc-9e8bc0539236', alt: 'OPENB' },
        { src: 'https://upload.wikimedia.org/wikipedia/fr/1/1d/Moov_Africa_logo.png?20210529100313', alt: 'MOOV' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/Orange.png?alt=media&token=74a15b03-fb4c-4240-91c8-bfda78be39db', alt: 'ORANGE' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/telecelfaso_logo.jpeg?alt=media&token=86cf24b7-cded-4e6e-b398-4bb981463d30', alt: 'TELECEL' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/laposte-burkina-faso-3471f814020ac69d4e0115d0cb5f8d293ad078bd94cadd4afa174e1c296d06b0.png?alt=media&token=588b282e-7a13-4b42-85c0-fb317215bbb7', alt: 'LAPOSTE' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/443_huawei.jpg?alt=media&token=70e56d21-4682-4e03-8626-fc2beb0cb08d', alt: 'HUAWEI' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/294706046_422403633238191_5789018271508231201_n-removebg-preview.png?alt=media&token=ae7f2bce-1400-4d68-800d-8f308954c407', alt: 'ABDI' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/PHOTO-2024-06-09-09-10-25.jpg?alt=media&token=abdcaa9b-d0b3-485f-a163-36b2b14e82d1', alt: 'PIINFO' },
        { src: 'https://firebasestorage.googleapis.com/v0/b/jdsic-d1986.appspot.com/o/logo.png?alt=media&token=0b6163ef-c760-4c3a-b1a1-bb844f9c5326', alt: 'UNIVERSITESF' },
        // Ajoutez autant d'images que nécessaire
    ];

}
