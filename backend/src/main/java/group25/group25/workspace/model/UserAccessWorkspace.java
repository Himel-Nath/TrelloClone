package group25.group25.workspace.model;

import javax.persistence.*;

@Entity
@Table(name = "user_access_workspace")
public class UserAccessWorkspace {
    public UserAccessWorkspace() {
        // Do nothing
    }

    public UserAccessWorkspace(int userId, int workspaceId) {
        this.userId = userId;
        this.workspaceId = workspaceId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_id")
    private int id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "workspace_id")
    private int workspaceId;

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getWorkspaceId() {
        return workspaceId;
    }

    public void setWorkspaceId(int workspaceId) {
        this.workspaceId = workspaceId;
    }
}
