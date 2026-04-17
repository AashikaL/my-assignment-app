import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  constructor(private uiService: UiService) {}

  toggleRightSidebar() {
    this.uiService.toggleRightSidebar();
  }
}
