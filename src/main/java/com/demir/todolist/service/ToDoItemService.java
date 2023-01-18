package com.demir.todolist.service;

import com.demir.todolist.module.ToDoItem;
import com.demir.todolist.repo.ToDoItemRepo;
import com.demir.todolist.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class ToDoItemService {
    private final ToDoItemRepo toDoItemRepo;

    @Autowired
    public ToDoItemService(ToDoItemRepo toDoItemRepo) {
        this.toDoItemRepo = toDoItemRepo;
    }

    public ToDoItem addToDo(ToDoItem todo) {
        todo.setToDoCode(UUID.randomUUID().toString());
        return toDoItemRepo.save(todo);

    }

    public List<ToDoItem> findAllToDos() {
        return toDoItemRepo.findAll();
    }

    @Transactional
    public ToDoItem updateToDo(ToDoItem toDoItem) {
        return toDoItemRepo.save(toDoItem);
    }

    @Transactional
    public void deleteToDo(Long id) {
        toDoItemRepo.deleteToDoById(id);
    }

    public List<ToDoItem> findToDoByList(Long id) {
        return toDoItemRepo.findToDoByList(id).orElseThrow(() -> new UserNotFoundException("List with the id " + id + " was not found"));
    }

    public ToDoItem findToDoById(Long id) {
        return toDoItemRepo.findToDoById(id).orElseThrow(() -> new UserNotFoundException("ToDo with the id " + id + " was not found"));
    }
}
