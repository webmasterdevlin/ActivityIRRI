import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departments: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departmentService.loadDepartments().subscribe(response => {
      this.departments = response.data;
      console.log(response.data);
    });
  }

  removeItem(_id: string, name: string): void {
    const confirmed = confirm(`Delete ${name}?`);

    if (confirmed) {
      this.removeFromDatabase(_id);
    }
  }

  private removeFromDatabase(_id: string): void {
    const index = this.departments.findIndex(d => d._id === _id);
    const departmentToRemove = this.departments.find(d => d._id === _id);

    // Optimistic update
    this.departments.splice(index, 1);

    this.departmentService
      .deleteDepartment(_id)
      .pipe(
        catchError(() =>
          // Rollback
          this.departments.splice(index, 0, departmentToRemove)
        )
      )
      .subscribe();
  }
}
