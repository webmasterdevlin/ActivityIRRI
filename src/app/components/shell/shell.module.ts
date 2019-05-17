import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from 'src/app/services/department.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewDepartmentComponent } from './new-department/new-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
@NgModule({
  declarations: [
    HomeComponent,
    NewDepartmentComponent,
    EditDepartmentComponent
  ],
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
      },
      {
        path: 'edit-detail/:_id',
        component: EditDepartmentComponent
      }
    ])
  ],
  providers: [DepartmentService]
})
export class ShellModule {}
