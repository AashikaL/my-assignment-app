import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  isCollapsed = false;
  activeItem: string = 'Overview';
  expandedMenus: { [key: string]: boolean } = {
    'Dashboards': true,
    'Users': false
  };

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(menu: string) {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
    this.expandedMenus[menu] = !this.expandedMenus[menu];
  }

  setActive(item: string) {
    this.activeItem = item;
  }
}
