import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CARD_LIST } from './data';
import { YourCardComponent } from './component/your-card/your-card.component';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { RecentTransactionComponent } from './component/recent-transaction/recent-transaction.component';
import { OverviewComponent } from './component/overview/overview.component';
import { ActivitiesComponent } from './component/activities/activities.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    YourCardComponent,
    StatisticsComponent,
    RecentTransactionComponent,
    OverviewComponent,
    ActivitiesComponent
  ]
})
export class DashboardComponent {

}
