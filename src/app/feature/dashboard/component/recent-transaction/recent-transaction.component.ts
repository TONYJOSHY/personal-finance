import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentTransactionComponent {

}
