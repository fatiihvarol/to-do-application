import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';  // Import AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected from styleUrl to styleUrls
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.username) {
      alert("Username cannot be empty");
      return; // Early return to prevent further execution
    }
    if (!this.password) {
      alert("Password cannot be empty");
      return; // Early return to prevent further execution
    }

    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        if (response.isSuccess) {
          console.log('Login successful', response);
          localStorage.setItem('token', response.result.token);
          this.router.navigate(['/main']); 
        } else {
          console.error('Login failed:', response);
         alert(response.errorMessage)
        }
      },
    });
  }
}
