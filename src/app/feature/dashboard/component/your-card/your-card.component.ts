import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CARD_LIST } from '../../data';

@Component({
  selector: 'app-your-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './your-card.component.html',
  styleUrls: ['./your-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourCardComponent {

  readonly cardList = CARD_LIST

}
