import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spending',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpendingComponent {

}
