
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';

const firebaseConfig = {
    apiKey: "AIzaSyBsbC98ES0RVMQrRpeunDOVrTGwTOPRG2U",
    authDomain: "jdsic-d1986.firebaseapp.com",
    projectId: "jdsic-d1986",
    storageBucket: "jdsic-d1986.appspot.com",
    messagingSenderId: "38228278542",
    appId: "1:38228278542:web:eced436b7722f92ebceb5f",
    measurementId: "G-B05P45G4WH"
};

// Initialize Firebase
export let firebaseProviders = [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
];
