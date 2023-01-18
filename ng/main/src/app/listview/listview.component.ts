import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ListItem} from "../listitem";
import {NgForm} from "@angular/forms";
import {ListItemService} from "../listitem.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  public editList: ListItem;
  public deleteList: ListItem;
  public lists: ListItem[];

  constructor(private listService: ListItemService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getLists();
  }


  public getLists(): void {
    this.listService.getLists().subscribe(
      (response: ListItem[]) => {
        this.lists = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public onDeleteList(listId: number): void{
    document.getElementById('delete-listitem-form').click();
    this.listService.deleteList(listId).subscribe(
      (response: void) => {
        console.log(response);
        this.getLists();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onUpdateList(list: ListItem): void{
    console.log(list);
    document.getElementById('update-listitem-form').click();
    this.listService.updateList(list).subscribe(
      (response: ListItem) => {
        console.log(response);
        this.getLists();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddList(addForm: NgForm): void{
    document.getElementById('name').setAttribute('value', "");
    this.listService.addList(addForm.value).subscribe(
      (response: ListItem) => {
        console.log(response);
        this.getLists();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public openModal(list: ListItem, mode: string): void{
    console.log("open modal",mode);
    const container = document.getElementById('box');
    const button = document.createElement('button');
    button.type =  'button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      console.log("test");
      button.setAttribute('data-target','#addListModal');
    }
    if(mode === 'edit'){
      this.editList = list;
      button.setAttribute('data-target','#updateListModal');
    }
    if(mode === 'delete'){
      this.deleteList = list;
      button.setAttribute('data-target','#deleteListModal');
    }
    container.appendChild(button);
    button.click();
  }


}
