import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionComponent {

}