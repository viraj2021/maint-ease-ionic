import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { WorkOrderCategory } from '../../../model/work-order-category.model';

@Injectable({ providedIn: 'root' })
export class WorkOrderCategoryService {
  private resourceUrl = ApiService.API_URL + '/work-order-categories';

  constructor(protected http: HttpClient) {}

  create(workOrderCategory: WorkOrderCategory): Observable<HttpResponse<WorkOrderCategory>> {
    return this.http.post<WorkOrderCategory>(this.resourceUrl, workOrderCategory, { observe: 'response' });
  }

  update(workOrderCategory: WorkOrderCategory): Observable<HttpResponse<WorkOrderCategory>> {
    return this.http.put(`${this.resourceUrl}/${workOrderCategory.id}`, workOrderCategory, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<WorkOrderCategory>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<WorkOrderCategory[]>> {
    const options = createRequestOption(req);
    return this.http.get<WorkOrderCategory[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
