import { Injectable } from '@angular/core';
import { ILead } from '../_interfaces/ILead';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl: string = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private httpClient: HttpClient) {}

  public getLead(): Observable<ILead[]> {
    return this.httpClient.get<ILead[]>(apiUrl + '/users');
  }
}
