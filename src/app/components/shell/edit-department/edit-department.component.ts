import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  _id: string;
  constructor(private _activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this._id = this._activatedRoute.snapshot.paramMap.get('_id');
  }
}
