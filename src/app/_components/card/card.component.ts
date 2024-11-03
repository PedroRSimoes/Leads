import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Lead } from '../../_models/lead';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    TabViewModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() model: Lead;
  @Input() id: number;
  @Input() name: string;
  @Input() username: string;
  @Input() email: string;
  @Input() accepted: boolean;
  @Input() content: string;
  @Input() street: string;
  data = 'November 1 2024 @ 11:38pm';

  accept() {
    this.accepted = true;
    // this.accepted.emit($event);
  }
}
