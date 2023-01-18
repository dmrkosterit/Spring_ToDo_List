package com.demir.todolist.controller;
import com.demir.todolist.module.ToDoItem;
import com.demir.todolist.service.ToDoItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class ToDoItemController {
    private final ToDoItemService toDoItemService;
    public ToDoItemController(ToDoItemService toDoItemService){
        this.toDoItemService = toDoItemService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ToDoItem>> getAllToDos(){
        List<ToDoItem> toDoItems = toDoItemService.findAllToDos();
        return new ResponseEntity<>(toDoItems, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<List<ToDoItem>> getToDosByList(@PathVariable("id") Long id){
        List<ToDoItem> toDoItems = toDoItemService.findToDoByList(id);
        return new ResponseEntity<>(toDoItems, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ToDoItem> getToDoById(@PathVariable("id") Long id){
        ToDoItem toDoItem = toDoItemService.findToDoById(id);
        return new ResponseEntity<>(toDoItem, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ToDoItem> addToDo(@RequestBody ToDoItem toDoItem){
        ToDoItem newToDoItem = toDoItemService.addToDo(toDoItem);
        return new ResponseEntity<>(newToDoItem, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ToDoItem> updateToDo(@RequestBody ToDoItem toDoItem){
        ToDoItem updateToDo = toDoItemService.updateToDo(toDoItem);
        return new ResponseEntity<>(updateToDo, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteToDo(@PathVariable ("id") Long id){
        toDoItemService.deleteToDo(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
