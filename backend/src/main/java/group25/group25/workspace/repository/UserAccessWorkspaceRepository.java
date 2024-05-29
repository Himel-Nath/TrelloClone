package group25.group25.workspace.repository;
import group25.group25.workspace.model.UserAccessWorkspace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccessWorkspaceRepository extends JpaRepository<UserAccessWorkspace, Integer> {
    public boolean existsByUserIdAndWorkspaceId(int userId, int workspaceId);   // JPA implements method based on name

}
