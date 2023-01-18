package com.demir.todolist.service;
import com.demir.todolist.exception.UserNotFoundException;
import com.demir.todolist.module.ListItem;
import com.demir.todolist.module.ToDoItem;
import com.demir.todolist.repo.ListItemRepo;
import com.demir.todolist.repo.ToDoItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;
@Service
public class ListItemService {
    private final ListItemRepo listItemRepo;
    private final ToDoItemRepo toDoItemRepo;

    @Autowired
    public ListItemService(ListItemRepo listItemRepo, ToDoItemRepo toDoItemRepo) {
        this.listItemRepo = listItemRepo;
        this.toDoItemRepo = toDoItemRepo;
    }

    public ListItem addList(ListItem listItem){
        listItem.setListCode(UUID.randomUUID().toString());
        return listItemRepo.save(listItem);

    }

    public List<ListItem> findAllLists(){
        return listItemRepo.findAll();
    }

    @Transactional
    public ListItem updateList(ListItem listItem){
        return listItemRepo.save(listItem);
    }

    @Transactional
    public void deleteList(Long id){ listItemRepo.deleteListItemById(id); }

    public ListItem findListById(Long id){
        return listItemRepo.findListItemById(id)
                .orElseThrow(() -> new UserNotFoundException("Listitem with the id " + id + " was not found"));
    }

}
