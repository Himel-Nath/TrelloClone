package group25.group25.workspace.repository;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.UserAccessWorkspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserAccessWorkspaceRepository extends JpaRepository<UserAccessWorkspace, Integer> {
    // TODO: This uses nativeQuery and so must return an integer value and not bool, figure out how to implement without nativeQuery
    @Query(value = "SELECT IF((SELECT COUNT(access_id) FROM user_access_workspace WHERE user_id = :uid AND workspace_id = :wid) > 0, true, false)", nativeQuery = true)
    public int existsByUserIdAndWorkspaceId(@Param("uid") int userId, @Param("wid") int workspaceId);

}
