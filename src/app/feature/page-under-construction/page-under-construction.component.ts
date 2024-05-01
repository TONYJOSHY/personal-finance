import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-under-construction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-under-construction.component.html',
  styleUrls: ['./page-under-construction.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageUnderConstructionComponent {

}
