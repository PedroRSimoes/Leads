import { Component, Input, Output, EventEmitter, input } from '@angular/core';
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
  @Input() email: string;
  @Input() accepted: boolean;
  @Input() declined: boolean;
  @Input() content: string;
  @Input() street: string;
  @Input() company: string;
  @Input() zipcode: number;
  @Input() catchPhrase: string;
  data = 'November 1 2024 @ 11:38pm';
  @Output() dataEmitter = new EventEmitter<number>();
  @Output() declineEmitter = new EventEmitter<number>();

  accept() {
    this.accepted = true;
    this.dataEmitter.emit(this.id);
  }

  decline() {
    this.declined = true;
    this.declineEmitter.emit(this.id);
  }
}
