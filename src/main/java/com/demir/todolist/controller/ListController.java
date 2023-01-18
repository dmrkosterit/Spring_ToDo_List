package com.demir.todolist.controller;
import com.demir.todolist.module.ListItem;
import com.demir.todolist.service.ListItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/list")
public class ListController {
    private final ListItemService listItemService;
    public ListController(ListItemService listItemService){
        this.listItemService = listItemService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ListItem>> getAllLists(){
        List<ListItem> listItems = listItemService.findAllLists();
        return new ResponseEntity<>(listItems, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ListItem> getListById(@PathVariable("id") Long id){
        ListItem listItem = listItemService.findListById(id);
        return new ResponseEntity<>(listItem, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<ListItem> addList(@RequestBody ListItem listItem){
        ListItem newListItem = listItemService.addList(listItem);
        return new ResponseEntity<>(newListItem, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ListItem> updateList(@RequestBody ListItem listItem){
        ListItem updateList = listItemService.updateList(listItem);
        return new ResponseEntity<>(updateList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteList(@PathVariable ("id") Long id){
        listItemService.deleteList(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
