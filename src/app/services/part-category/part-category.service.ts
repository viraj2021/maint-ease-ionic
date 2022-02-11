import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { PartCategory } from '../../../model/part-category.model';

@Injectable({ providedIn: 'root' })
export class PartCategoryService {
  private resourceUrl = ApiService.API_URL + '/part-categories';

  constructor(protected http: HttpClient) {}

  create(partCategory: PartCategory): Observable<HttpResponse<PartCategory>> {
    return this.http.post<PartCategory>(this.resourceUrl, partCategory, { observe: 'response' });
  }

  update(partCategory: PartCategory): Observable<HttpResponse<PartCategory>> {
    return this.http.put(`${this.resourceUrl}/${partCategory.id}`, partCategory, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<PartCategory>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<PartCategory[]>> {
    const options = createRequestOption(req);
    return this.http.get<PartCategory[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
