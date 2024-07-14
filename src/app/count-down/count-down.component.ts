import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-count-down',
  standalone: true,
  imports: [],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css'
})
export class CountDownComponent {

    eventDate = new Date('2024-12-31T23:59:59'); // Date et heure de l'événement
    timeLeft!: string;
    subscription!: Subscription;

    ngOnInit() {
        this.updateCountdown();
        this.subscription = interval(1000).subscribe(() => {
            this.updateCountdown();
        });
    }

    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.eventDate.getTime() - now;

        if (distance < 0) {
            this.timeLeft = 'Événement terminé';
            this.subscription.unsubscribe();
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
