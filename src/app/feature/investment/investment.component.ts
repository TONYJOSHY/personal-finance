import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentComponent {

}
