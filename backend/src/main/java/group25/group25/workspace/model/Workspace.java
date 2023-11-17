package group25.group25.workspace.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import group25.group25.board.model.Board;
import group25.group25.usermanagement.model.User;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "workspaces")
public class Workspace {
    @ManyToMany
    @JoinTable(
            name = "user_access_workspace",
            joinColumns = @JoinColumn(name = "workspace_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnore
    private Set<User> assignedUsers = new HashSet<>();

    @OneToMany
    @JoinColumn(name = "workspace_id")
    private Set<Board> boards = new HashSet<>();

    public Workspace() {
        this.title = "New Workspace";
        this.description = "";
    }

    public Workspace (String title, String description) {
        this.title = title;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "workspace_id")
    private int id;

    @Column(name = "workspace_title")
    private String title;

    @Column(name = "workspace_description")
    private String description;

    public int getId() {
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

    public Set<User> getAssignedUsers() {
        return assignedUsers;
    }

    public Set<Board> getBoards() {
        return boards;
    }
}
