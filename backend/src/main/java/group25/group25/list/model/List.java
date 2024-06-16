package group25.group25.list.model;

import group25.group25.board.model.Board;
import group25.group25.task.model.Task;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "task_lists")
public class List {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "list_id")
    private Integer id;

    @Column(name = "list_title")
    private String title;

    @Column(name = "list_description")
    private String description;

    @Column(name = "board_id")
    private Integer boardId;

    @OneToMany
    @JoinColumn(name = "list_id")
    private Set<Task> tasks = new HashSet<>();

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getBoardId() {
        return boardId;
    }

    public void setBoardId(Integer boardId) {
        this.boardId = boardId;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }
}
