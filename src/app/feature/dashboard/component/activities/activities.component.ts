import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent {

}
