package com.demir.todolist.repo;
import com.demir.todolist.module.ListItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ListItemRepo extends JpaRepository<ListItem, Long> {
    void deleteListItemById(Long id);
    Optional<ListItem> findListItemById(Long id);
}
