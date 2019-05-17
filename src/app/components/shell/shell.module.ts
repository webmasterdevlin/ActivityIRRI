import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from 'src/app/services/department.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, NewDepartmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'new-department',
        component: NewDepartmentComponent
      }
    ])
  ],
  providers: [DepartmentService]
})
export class ShellModule {}
