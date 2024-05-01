import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUnderConstructionComponent } from '../page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, PageUnderConstructionComponent],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionComponent {

}
