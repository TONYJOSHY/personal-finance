import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {

}
