import { Component, OnInit } from '@angular/core';
import {ToDoItem} from "../todoitem";
import {NgForm} from "@angular/forms";
import {ToDoItemService} from "../todoitem.service";
import {HttpErrorResponse} from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ListItemService} from "../listitem.service";
import {ListItem} from "../listitem";

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoViewComponent implements OnInit {
  public editToDo: ToDoItem = {list: "", title: "", toDoCode: "",note: "", done: false, id: -1};
  public deleteToDo: ToDoItem;
  public toDos: ToDoItem[];
  public selectedList: ListItem;

  constructor(private toDoService: ToDoItemService,
              private listService: ListItemService,
              private route: ActivatedRoute,
              private router:Router) { }
sub;
  id;
  ngOnInit() {
    this.sub=this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getToDos();
    this.getList()
  }



  public getToDos(): void{
    this.toDoService.findToDoByList(this.id).subscribe(
      (response: ToDoItem[]) => {
        this.toDos = response;
        console.log(this.toDos);
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public getList(): void{
    this.listService.findListById(this.id).subscribe(
      (response: ListItem) => {
        this.selectedList = response;
        console.log(response);
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );

  }

  public onDeleteToDo(toDoId: number): void{
    document.getElementById('delete-todoitem-form').click();
    this.toDoService.deleteToDo(toDoId).subscribe(
      (response: void) => {
        console.log(response);
        this.getToDos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onUpdateToDo(toDo: ToDoItem): void{
    this.toDoService.updateToDo(toDo).subscribe(
      (response: ToDoItem) => {
        console.log(response);
        this.getToDos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddToDo(addForm: NgForm): void{
    addForm.value.list = this.id;
    this.toDoService.addToDo(addForm.value).subscribe(
      (response: ToDoItem) => {
        console.log(response);
        this.getToDos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public openModal(toDo: ToDoItem, mode: string): void{
    const container = document.getElementById('box');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      console.log("test");
      button.setAttribute('data-target','#addToDoModal');
    }
    if(mode === 'edit'){
      this.editToDo = toDo;
      button.setAttribute('data-target','#updateToDoModal');
    }
    if(mode === 'delete'){
      this.deleteToDo = toDo;
      button.setAttribute('data-target','#deleteToDoModal');
    }
    if(mode==='detail'){
      this.editToDo = toDo;
      button.setAttribute('data-target','#modal-success')
    }
    container.appendChild(button);
    button.click();
  }

  public onCompleteToDo(toDo: ToDoItem){
    this.editToDo = toDo;
    if(this.editToDo.done === true){
      console.log("item is "+this.editToDo.done+" setting it FALSE")
      this.editToDo.done = false;
    }
    else{
      console.log("item is "+this.editToDo.done+" setting it TRUE")

      this.editToDo.done = true;
    }
    this.onUpdateToDo(this.editToDo);
  }

}
