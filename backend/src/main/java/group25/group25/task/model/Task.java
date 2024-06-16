package group25.group25.task.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import group25.group25.list.model.List;
import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.Workspace;

import javax.persistence.*;

@Entity
@Table(name = "task_cards")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "card_id")
    private Integer id;

    @Column(name = "card_title")
    private String title;

    @Column(name = "card_description")
    private String description;

    @Column(name = "card_user")
    private Integer assigneeId;

    @ManyToOne
    @JoinColumn(name="card_user", insertable = false, updatable = false)
    private User assignee;

    @Column(name = "list_id")
    private Integer listId;

    @Column(name = "card_due_date")
    private String date;

    @ManyToOne
    @JoinColumn(name = "list_id", insertable = false, updatable = false)
    @JsonIgnore
    private List list;

    public Task(String title, String description, Integer listId, String date, Integer assigneeId) {
        this.title = title;
        this.description = description;
        this.listId = listId;
        this.date = date;
        this.assigneeId = assigneeId;
    }


    public Task(){

    }

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

    public Integer getListId() { return listId; }

    public void setListId(Integer listId) { this.listId = listId; }


    public String getDate() { return date; }

    public void setDate(String date) { this.date = date; }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

    public Integer getAssigneeId() {
        return assigneeId;
    }

    public void setAssigneeId(Integer assigneeId) {
        this.assigneeId = assigneeId;
    }

    public User getAssignee() {
        return assignee;
    }

    public void setAssignee(User assignee) {
        this.assignee = assignee;
    }
}



