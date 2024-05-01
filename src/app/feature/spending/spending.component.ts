import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUnderConstructionComponent } from '../page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-spending',
  standalone: true,
  imports: [CommonModule, PageUnderConstructionComponent],
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpendingComponent {

}
