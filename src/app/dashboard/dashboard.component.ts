import { Component } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
