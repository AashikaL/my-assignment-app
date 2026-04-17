import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = [
      { id: 1, title: 'Revamp Dashboard UI', completed: false, priority: 'High', dueDate: 'Today' },
      { id: 2, title: 'Finalize Pricing Strategy', completed: true, priority: 'High', dueDate: 'Done' },
      { id: 3, title: 'Conduct User Testing', completed: false, priority: 'Medium', dueDate: 'Tomorrow' },
      { id: 4, title: 'Update API Documentation', completed: false, priority: 'Low', dueDate: '23 Apr 2024' },
      { id: 5, title: 'Refactor Auth Hooks', completed: false, priority: 'Medium', dueDate: '25 Apr 2024' },
      { id: 6, title: 'Implement Data Caching', completed: true, priority: 'High', dueDate: 'Done' },
      { id: 7, title: 'Fix CSS Grid Issues', completed: false, priority: 'Low', dueDate: '28 Apr 2024' },
      { id: 8, title: 'Add Multi-language Support', completed: false, priority: 'Medium', dueDate: '01 May 2024' }
    ];
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }
}
