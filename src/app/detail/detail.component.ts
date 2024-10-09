import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Priority } from '../model/priority';
import { Router } from '@angular/router'; // Import Router
import { TodoItemUpdate } from '../model/todo-item-update-model';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [CommonModule, FormsModule],

})
export class DetailComponent implements OnInit {
  todoItem: any;
  originalTodoItem: any; // To store the original values
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }
  updateTodoItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!this.todoItem.title.trim()) {
      alert("title can not be empty")
      return; 
    }
    
    const updatedTodoItem:TodoItemUpdate = {
      title: this.todoItem.title,
      detail: this.todoItem.detail,
      isCompleted: this.todoItem.isCompleted,
      priority: Priority[this.todoItem.priority] 
    };  

    this.todoService.updateTodoItem(id, updatedTodoItem).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          alert('Todo item updated successfully!');
          this.router.navigate([`/main`]);

        } else {
          alert('Failed to update todo item.');
        }
      },
      error: () => {
        alert('An error occurred while updating the todo item.');
      }
    });
  }

  deleteTodoItem() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.deleteTodoItem(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            alert("deleted succesfully")
            this.router.navigate([`/main`]); // Navigate to the detail page

          } else {
            this.errorMessage = 'Failed delete the todo item.';
          }
        },
        error: () => {
          this.errorMessage = 'Error occurred while delete the todo item.';
        },
        complete: () => {
          this.ngOnInit();
        }
      });
    } else {
      this.errorMessage = 'Invalid todo item ID.';
    }
  }
  handleComplate(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.updateStatusTodoItem(+id).subscribe({
        next: (response) => {
          if (response.isSuccess) {
            this.todoItem = response.result;
            alert("Status Changed Succesfully")
            this.router.navigate([`/main`]);


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
