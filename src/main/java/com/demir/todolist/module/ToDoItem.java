package com.demir.todolist.module;

import javax.persistence.*;
import java.io.Serializable;


@Table(name = "TO_DO")
//@BusinessKeySet(values = "id")
@Entity

public class ToDoItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String title;
    private boolean done;
    private String toDoCode;
    private Long list;
    private String note;

    public ToDoItem() {
        this.done = false;
    }

    public ToDoItem(Long id, String title, boolean done, String toDoCode,Long list, String note) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.toDoCode = toDoCode;
        this.list = list;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean getDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String getToDoCode() {
        return toDoCode;
    }

    public void setToDoCode(String toDoCode) {
        this.toDoCode = toDoCode;
    }

    public Long getList() {
        return list;
    }

    public void setList(Long list) {
        this.list = list;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
