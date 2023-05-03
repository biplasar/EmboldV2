import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private baseURL = "/api";
  //private baseURL = "/";

  constructor(private httpClient: HttpClient) {
  }

getRepositoryList(): Observable<any> {

    return this.httpClient.get(`${this.baseURL}`);
  }

getRepositoryIssueList(uid: string): Observable<any> {

    let repositoryIssueListURL = `${this.baseURL}` +'/' + uid + '/issues'
    return this.httpClient.get(`${repositoryIssueListURL}`);
  }

scanRepository(uid: string) : Observable<any> 
  {
     let scanURL = `${this.baseURL}` +'/' + uid + '/scan'
     console.log(scanURL);
     return this.httpClient.post(`${scanURL}`, null);
  }

}
