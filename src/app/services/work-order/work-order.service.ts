import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { WorkOrder } from '../../../model/work-order.model';

@Injectable({ providedIn: 'root' })
export class WorkOrderService {
  private resourceUrl = ApiService.API_URL + '/work-orders';

  constructor(protected http: HttpClient) {}

  create(workOrder: WorkOrder): Observable<HttpResponse<WorkOrder>> {
    return this.http.post<WorkOrder>(this.resourceUrl, workOrder, { observe: 'response' });
  }

  update(workOrder: WorkOrder): Observable<HttpResponse<WorkOrder>> {
    return this.http.put(`${this.resourceUrl}/${workOrder.id}`, workOrder, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<WorkOrder>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<WorkOrder[]>> {
    const options = createRequestOption(req);
    return this.http.get<WorkOrder[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
