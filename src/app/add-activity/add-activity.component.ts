import { Component } from '@angular/core';
import { TodoService } from '../services/todo/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateTodoModel } from '../model/create-todo';
import { Priority } from '../model/priority';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AddActivityComponent {
  Priority = Priority;

  newTodo: CreateTodoModel = {
    title: '',
    isCompleted: false,
    detail: '',
    priority: Priority.Low,
  };

  successMessage: string | null = null;

  constructor(private todoService: TodoService, private router: Router) { }

  validate(): string | undefined {

    if (!this.newTodo.title.trim()) {
      return "Title is required.";
    }
    return undefined;
  }


  addTodoItem() {
    const validationMessage = this.validate();
    if (validationMessage) {
      alert(validationMessage);
      return;
    }

    this.todoService.createTodoItem(this.newTodo).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.successMessage = 'Todo item added successfully!';
          alert("Todo item added successfully!");
          this.router.navigate(['/main']);
        } else {
          this.successMessage = 'Failed to add todo item.';
        }
      },
      error: () => {
        this.successMessage = 'An error occurred while adding the todo item.';
      }
    });
  }
}
