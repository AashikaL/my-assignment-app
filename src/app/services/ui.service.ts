import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  isRightSidebarOpen = signal(false);

  toggleRightSidebar() {
    this.isRightSidebarOpen.set(!this.isRightSidebarOpen());
  }

  closeRightSidebar() {
    this.isRightSidebarOpen.set(false);
  }
}
