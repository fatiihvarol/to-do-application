import { Router } from '@angular/router'; // Import Router
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import { TodoItem } from '../model/todo-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [CommonModule],
})
export class MainComponent implements OnInit {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.getMyTodoItems();
  }

  private getMyTodoItems(): void {
    this.todoService.getMyTodoItems().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.todoItems = response.result;
        } else {
          console.error('Failed to fetch todo items:', response.errorMessage);
        }
      },
      error: (error) => {
        console.error('Error fetching todo items:', error);
      },
    });
  }

  goToDetail(id: number): void {
    this.router.navigate([`/todo-detail/${id}`]); // Navigate to the detail page
  }
}
