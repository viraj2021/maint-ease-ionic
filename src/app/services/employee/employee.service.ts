import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { Employee } from '../../../model/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private resourceUrl = ApiService.API_URL + '/employees';

  constructor(protected http: HttpClient) {}

  create(employee: Employee): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.resourceUrl, employee, { observe: 'response' });
  }

  update(employee: Employee): Observable<HttpResponse<Employee>> {
    return this.http.put(`${this.resourceUrl}/${employee.id}`, employee, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Employee>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Employee[]>> {
    const options = createRequestOption(req);
    return this.http.get<Employee[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
