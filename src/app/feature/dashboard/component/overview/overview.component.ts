import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OVERVIEW_LIST } from '../../data';
import { CashFlow, Difference } from 'src/app/shared/enum/overview.enum';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MatIconModule,],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {

  readonly overviewList = OVERVIEW_LIST;
  readonly DIFFENCE = Difference;
  readonly CASHFLOW = CashFlow;

}
