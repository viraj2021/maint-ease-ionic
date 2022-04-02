import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import {Team} from '../../../model/team.model';

@Injectable({ providedIn: 'root' })
export class TeamService {
  private resourceUrl = ApiService.API_URL + '/teams';

  constructor(protected http: HttpClient) {}

  create(team: Team): Observable<HttpResponse<Team>> {
    return this.http.post<Team>(this.resourceUrl, team, { observe: 'response' });
  }

  update(team: Team): Observable<HttpResponse<Team>> {
    return this.http.put(`${this.resourceUrl}/${team.id}`, team, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Team>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Team[]>> {
    const options = createRequestOption(req);
    return this.http.get<Team[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
