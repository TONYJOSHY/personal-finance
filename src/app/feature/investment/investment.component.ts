import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUnderConstructionComponent } from '../page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule, PageUnderConstructionComponent],
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentComponent {

}
