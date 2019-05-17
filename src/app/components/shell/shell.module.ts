import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from 'src/app/services/department.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewDepartmentComponent } from './new-department/new-department.component';

@NgModule({
  declarations: [HomeComponent, NewDepartmentComponent],
  imports: [
    CommonModule,
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
