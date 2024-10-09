import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Priority } from '../model/priority';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [CommonModule, FormsModule],

})
export class DetailComponent implements OnInit {
  todoItem: any;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }
  updateTodoItem(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const updatedTodoItem = {
        title: this.todoItem.title,
        detail: this.todoItem.detail,
        isCompleted: this.todoItem.isCompleted,
        priority: Priority[this.todoItem.priority] // Enum değerini kullanın
    };

    this.todoService.updateTodoItem(id,updatedTodoItem).subscribe({
        next: (response) => {
            if (response.isSuccess) {
                alert('Todo item updated successfully!');
                // Güncel verileri almak için tekrar istekte bulunabilir veya verileri güncelleyebilirsiniz.
            } else {
                alert('Failed to update todo item.');
            }
        },
        error: () => {
            alert('An error occurred while updating the todo item.');
        }
    });
}

  deleteTodoItem()
  {

  }
  handleComplate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.updateStatusTodoItem(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.todoItem = response.result;

          } else {
            this.errorMessage = 'Failed update the todo item.';

          }
        },
        error: () => {
          this.errorMessage = 'Error occurred while update the todo item.';
        },
        complete: () => {
          this.ngOnInit();
        }
      });
    } else {
      this.errorMessage = 'Invalid todo item ID.';
    }
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoItemById(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.todoItem = response.result;
          } else {
            this.errorMessage = 'Failed to load the todo item.';
          }
        },
        error: () => {
          this.errorMessage = 'Error occurred while fetching the todo item.';
        }
      });
    } else {
      this.errorMessage = 'Invalid todo item ID.';
    }
  }
}
