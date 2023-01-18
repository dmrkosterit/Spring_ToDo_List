import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ListItem} from "./listitem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListItemService {
  private apiServerUrl =  environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public findListById(id: number): Observable<ListItem>{
    return this.http.get<ListItem>(this.apiServerUrl + '/list/find/' + id)
  }

  public getLists(): Observable<ListItem[]>{
    return this.http.get<ListItem[]>(this.apiServerUrl + '/list/all');
  }

  public addList(list: ListItem): Observable<ListItem>{
    return this.http.post<ListItem>(this.apiServerUrl + '/list/add', list);
  }

  public updateList(list: ListItem): Observable<ListItem>{
    return this.http.put<ListItem>(this.apiServerUrl + '/list/update/', list);
  }

  public deleteList(listId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + '/list/delete/' + listId);
  }
}

