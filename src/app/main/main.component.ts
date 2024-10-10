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
  completedTodos: TodoItem[] = [];
  incompletedTodos: TodoItem[] = [];

  constructor(private todoService: TodoService, private router: Router) {} 

  ngOnInit(): void {
    this.getMyTodoItems();
  }
  toggleCompletion(id:number)
  {
    if (id) {
      this.todoService.updateStatusTodoItem(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            alert("Status Changed Succesfully")
          } 
        },
        complete: () => {
          this.ngOnInit();
        }
      });
    } 
  }
  deleteTodoItem(id:number) {
    if (id) {
      this.todoService.deleteTodoItem(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            alert("deleted succesfully")
            this.router.navigate([`/main`]); // Navigate to the detail page

          } 
        },
        complete: () => {
          this.ngOnInit();
        }
      });
    } 
  }
  private getMyTodoItems(): void {
    this.todoService.getMyTodoItems().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.todoItems = response.result;
          this.completedTodos = this.todoItems.filter(item => item.isCompleted);
          this.incompletedTodos = this.todoItems.filter(item => !item.isCompleted);
        } else {
          console.error('Failed to fetch todo items:', response.errorMessage);
        }
      },
      error: (error) => {
        console.error('Error fetching todo items:', error);
      },
    });
  }

  addTodo() {
    this.router.navigate([`/add-activity`]); 
  }

  goToDetail(id: number): void {
    this.router.navigate([`/todo-detail/${id}`]);
  }
}
