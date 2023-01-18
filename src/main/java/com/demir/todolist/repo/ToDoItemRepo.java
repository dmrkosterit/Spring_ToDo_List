package com.demir.todolist.repo;
import com.demir.todolist.module.ToDoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ToDoItemRepo extends JpaRepository<ToDoItem, Long> {
    void deleteToDoById(Long id);
    Optional<List<ToDoItem>> findToDoByList(Long list);
    Optional<ToDoItem> findToDoById(Long id);
}
