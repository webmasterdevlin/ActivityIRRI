import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { BaseUrl } from './api.config';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class DepartmentService {
  constructor(private _httpClient: HttpClient) {}

  loadDepartments(): Observable<ResponseModel> {
    return this._httpClient.get<ResponseModel>(`${BaseUrl.departments}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(window.alert(`Something happened. ${err.message}`));
      })
    );
  }
}
