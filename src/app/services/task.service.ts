import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:HttpClient
  ) { }

  getAllTasks():Observable<any> {
    //const path = 'https://estudiantes-profesor.herokuapp.com/api/estudiantes';
    //const path = 'http://127.0.0.1:5000/api/estudiantes';
    const path = '/api/estudiantes';
    return this.http.get<Task[]>(path);
  }
}
