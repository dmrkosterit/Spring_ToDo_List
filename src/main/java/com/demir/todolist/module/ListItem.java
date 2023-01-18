package com.demir.todolist.module;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "LIST")
@Entity
public class ListItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String listCode;

    public ListItem() {
    }

    public ListItem(Long id, String name, boolean done, String listCode) {
        this.id = id;
        this.name = name;
        this.listCode = listCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getListCode() {
        return listCode;
    }

    public void setListCode(String listCode) {
        this.listCode = listCode;
    }
}
