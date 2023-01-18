import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToDoItem} from "../todoitem";
import {HttpErrorResponse} from "@angular/common/http";
import {ToDoItemService} from "../todoitem.service";

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {
  id: number;
  public selected: ToDoItem;


  constructor(private route: ActivatedRoute,
              private toDoService: ToDoItemService,
              private router: Router) {
  }

  sub;

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
      this.findToDo();
    });
  }

  public findToDo(): void{
    this.toDoService.findToDoById(this.id).subscribe(
      (response: ToDoItem) => {
        this.selected = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }


  public onUpdateToDo(toDo: ToDoItem): void{
    this.toDoService.updateToDo(toDo).subscribe(
      (response: ToDoItem) => {
        console.log(response);
        this.findToDo();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
