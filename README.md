# Project Title

To-do Application Project

## Prerequisites
- Angular
- MSSQL
- .Net Core Api

### Angular Project Setup
1. **Prerequisites**:
  
   - You need to have Angular CLI installed. To install it, run the following command:
     ```bash
     npm install -g @angular/cli
     ```

2. **Cloning the Project**:
   - Clone the project from GitHub (return to the main directory first):
     ```bash
     git clone https://github.com/fatiihvarol/to-do-application.git
     
     cd to-do-application
     ```

3. **Installing Dependencies**:
   - Open a terminal in the project directory and run the following command to install dependencies:
     ```bash
     npm install
     ```

4. **Starting the Application**:
   - Run the following command to start the Angular application:
     ```bash
     ng serve
     ```
   - By default, the application will run at `http://localhost:4200`.

### Testing the Project
- With both applications running, open your browser and go to [http://localhost:4200](http://localhost:4200) to view the Angular application.

## General Information
This project is an evaluation task from the Angular training course. The goal is to develop a user-specific to-do list application with basic CRUD operations. The application will allow users to log in and manage their tasks by adding, listing, editing, and deleting activities.

## Requirement Specifications
- **Login**: Users must log in with their username and password.
- **To-Do List**: Upon logging in, the user will see a personalized to-do list for the current day.

## Page Specifications

### 1. Index (Main Page)
The main page lists both completed and pending tasks, ordered by priority. Features include:
- **Title**: Display the task title.
- **Create Date**: Display the task creation date.
- **IsCompleted**: Checkbox that toggles between completed and incomplete states.
- **Detail**: Optional description of the task.
- **Priority**: Low, Medium, High.
- **Actions**: Delete and update tasks.
- **Add Activity Button**: Redirects to the Add Activity page.

### 2. Add Activity Page
The page for creating a new task includes the following fields:
- **Title** (required): The task title.
- **IsCompleted** (required): Defaults to `False`, with an option to change to `True`.
- **Detail** (optional): A description of the task.
- **Priority** (optional): A dropdown with values: Low, Medium, High.

### 3. Detail Page
Clicking on a task in the list opens the detail page, where users can view and edit:
- **Title**: Editable field.
- **IsCompleted**: Editable checkbox.
- **Detail**: Optional description.
- **Priority**: Editable priority with Low, Medium, High options.


## Screenshots
### Login
![Login](https://github.com/user-attachments/assets/b6027749-2e85-4784-9743-27d5158996a7)

### Login Invalid
![Login Invalid](https://github.com/user-attachments/assets/cbf85aab-daed-428b-8210-c70032637f20)

### Index Page
![Index Page](https://github.com/user-attachments/assets/2c1f79ce-ed8b-4266-bf89-efb57636d6e3)


### Completed To-Do
![Completed To-Do](https://github.com/user-attachments/assets/2c923077-9f7f-4763-a50e-1f5ad10e42e7)
### Form Validation
![Form Validation](https://github.com/user-attachments/assets/05e12d46-f617-44d9-800e-6ccab50c043f)
### Add Item Alert
![Add Item Alert](https://github.com/user-attachments/assets/e6bab9f9-ee30-458b-b186-b3cbb9db5048)



### Delete Alert
![Delete Alert](https://github.com/user-attachments/assets/5b4df2af-3244-4630-9605-d260023fc4b0)







### Status Changed Alert
![Status Changed Alert](https://github.com/user-attachments/assets/f7edbd53-e50b-404f-881a-aaf9887b0350)

### To-Do Detail
![To-Do Detail](https://github.com/user-attachments/assets/3c74e438-fdbc-4774-ad7e-192826f491fd)

### Update Alert
![Update Alert](https://github.com/user-attachments/assets/78726603-5f40-47b2-802b-ab3ed84a96c7)

### Controller Endpoints
![Controller Endpoints](https://github.com/user-attachments/assets/7ac710b0-64f1-41dc-ba01-4d0109ae3312)
