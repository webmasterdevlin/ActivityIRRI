import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from 'src/app/services/department.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
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
      }
    ])
  ],
  providers: [DepartmentService]
})
export class ShellModule {}
