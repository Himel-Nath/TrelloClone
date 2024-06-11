package group25.group25.board.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import group25.group25.list.model.List;
import group25.group25.workspace.model.Workspace;

import java.util.Set;

@Entity
@Table(name = "boards")
public class Board {

    public Board() {
    }

    public Board(Long boardId, String dateCreated, String description, String boardTitle) {
        this.id = boardId;
        this.dateCreated = dateCreated;
        this.description = description;
        this.title = boardTitle;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @Column(name = "board_title")
    private String title;

    @Column(name = "board_description")
    private String description;

    @OneToMany
    @JoinColumn(name = "board_id")
    private Set<List> lists;

    @ManyToOne
    @JoinColumn(name = "workspace_id", insertable = false, updatable = false)
    @JsonIgnore
    private Workspace workspace;

    @Column(name="workspace_id")
    private int workspaceId;

    @Column(name = "date_created")
    private String dateCreated;

    public Workspace getWorkspace() {
        return workspace;
    }

    public void setWorkspace(Workspace workspace) {
        this.workspace = workspace;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getTitle() { return title; }

    public void setTitle(String title) { this.title = title; }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getWorkspaceId() {
        return workspaceId;
    }

    public void setWorkspaceId(int workspaceId) {
        this.workspaceId = workspaceId;
    }

    public Set<List> getLists() {
        return lists;
    }

    public void setLists(Set<List> lists) {
        this.lists = lists;
    }
}
