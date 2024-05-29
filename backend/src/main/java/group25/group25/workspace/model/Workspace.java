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

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "workspace_id")
    private int id;

    @Column(name = "workspace_title")
    private String title;

    @Column(name = "workspace_description")
    private String description;

    @ManyToMany(fetch = FetchType.LAZY) // lazy when data don't need to fetch every time, improves performance
    @JoinTable( // many users can have many workspaces
      name = "user_access_workspace",
      joinColumns = @JoinColumn(name = "workspace_id"),
      inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnore
    private Set<User> assignedUsers = new HashSet<>();

    @OneToMany(mappedBy = "workspace", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Board> boards = new HashSet<>();

    // Constructor if title and description is not provided
    public Workspace() {
        this.title = "New Workspace";
        this.description = "";
    }

    public Workspace (String title, String description) {
        this.title = title;
        this.description = description;
    }

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
