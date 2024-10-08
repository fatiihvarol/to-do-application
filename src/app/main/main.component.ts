import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo/todo.service'; // Adjust the import path as necessary
import { TodoItem } from '../model/todo-item.mode'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'], 
  imports: [CommonModule], // Add CommonModule here

})
export class MainComponent implements OnInit {

  todoItems: TodoItem[] = []; // Use the TodoItem interface

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getMyTodoItems(); // Call the function to get todo items
  }

  private getMyTodoItems(): void {
    this.todoService.getMyTodoItems().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.todoItems = response.result; // Use the result array from the response
          console.log('Todo items:', this.todoItems);
        } else {
          console.error('Failed to fetch todo items:', response.errorMessage);
        }
      },
      error: (error) => {
        console.error('Error fetching todo items:', error);
      }
    });
  }
}
