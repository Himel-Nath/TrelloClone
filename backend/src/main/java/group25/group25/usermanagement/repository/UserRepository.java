package group25.group25.usermanagement.repository;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByEmail(String email);

    @Query("SELECT u FROM User u where u.email = ?1")
    public User findUserByEmail(String email);

    @Query("SELECT w FROM Workspace w INNER JOIN UserAccessWorkspace a ON (w.id = a.workspaceId) INNER JOIN User u ON (a.userId = u.id) WHERE u.id = ?1")
    public Set<Workspace> getWorkspaces(int id);

    @Modifying
    @Query("UPDATE User u SET u.password =?1 WHERE u.email =?2")
    public void updateUserPasswordByEmail(String newPassword, String email);
}
