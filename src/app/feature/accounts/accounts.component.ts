import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUnderConstructionComponent } from '../page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, PageUnderConstructionComponent],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {

}
