import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line:quotemark
  readonly URL_DB = "https://api.mlab.com/api/1/databases/angular_db/collections/tasks";
  // tslint:disable-next-line:quotemark
  readonly param = new HttpParams().set("apiKey", "key");

  constructor(private http: HttpClient) {
    this.getTask();
  }

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.param });
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, { params: this.param }).subscribe(data => {
    });
    if (list.length === 0) {
      window.location.reload();
    }
  }
}
