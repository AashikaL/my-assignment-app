import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.html',
  styleUrls: ['./right-sidebar.css']
})
export class RightSidebarComponent {
  constructor(public uiService: UiService) {}

  notifications = [
    { icon: 'bi-bug', color: 'blue', title: 'You fixed a bug.', time: 'Just now' },
    { icon: 'bi-person', color: 'gray', title: 'New user registered.', time: '59 minutes ago' },
    { icon: 'bi-bug', color: 'blue', title: 'You fixed a bug.', time: '12 hours ago' },
    { icon: 'bi-broadcast', color: 'gray', title: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM' }
  ];

  activities = [
    { avatar: 'https://ui-avatars.com/api/?name=JS&background=random', title: 'Changed the style.', time: 'Just now' },
    { avatar: 'https://ui-avatars.com/api/?name=RV&background=random', title: 'Released a new version.', time: '59 minutes ago' },
    { avatar: 'https://ui-avatars.com/api/?name=SB&background=random', title: 'Submitted a bug.', time: '12 hours ago' },
    { avatar: 'https://ui-avatars.com/api/?name=MD&background=random', title: 'Modified A data in Page X.', time: 'Today, 11:59 AM' }
  ];

  close() {
    this.uiService.closeRightSidebar();
  }
}
