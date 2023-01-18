import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {ToDoItem} from "./todoitem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getToDos(): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(this.apiServerUrl + '/todo/all');
  }

  public findToDoById(id: number): Observable<ToDoItem>{
    return this.http.get<ToDoItem>(this.apiServerUrl + '/todo/find/' + id);
  }

  public findToDoByList(id: number): Observable<ToDoItem[]>{
    return this.http.get<ToDoItem[]>(this.apiServerUrl + '/todo/list/' + id)
  }

  public addToDo(toDoItem: ToDoItem): Observable<ToDoItem>{
    return this.http.post<ToDoItem>(this.apiServerUrl + '/todo/add', toDoItem);
  }

  public updateToDo(toDoItem: ToDoItem): Observable<ToDoItem>{
    return this.http.put<ToDoItem>(this.apiServerUrl + '/todo/update/', toDoItem);
  }

  public deleteToDo(toDoId: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/todo/delete/' + toDoId);
  }

}
