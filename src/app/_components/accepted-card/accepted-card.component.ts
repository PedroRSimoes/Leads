import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TabViewModule } from 'primeng/tabview';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Lead } from '../../_models/lead';

@Component({
  selector: 'app-accepted-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    TabViewModule,
  ],
  templateUrl: './accepted-card.component.html',
  styleUrl: './accepted-card.component.css',
})
export class AcceptedCardComponent {
  @Input() content: string;
  @Input() id: number;
  @Input() name: string;
  @Input() username: string;
  @Input() email: string;
  @Input() accepted: boolean;
  @Input() model: Lead;

  data = 'November 1 2024 @ 11:38pm';
}
