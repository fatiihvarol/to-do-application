import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddActivityComponent } from './add-activity/add-activity.component';  // Example for another route
import { MainComponent } from './main/main.component';  // Example for another route
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add-activity', component: AddActivityComponent },  
  { path: 'main', component: MainComponent },


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
