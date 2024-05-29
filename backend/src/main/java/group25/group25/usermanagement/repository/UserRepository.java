package group25.group25.usermanagement.repository;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository; // for generic CRUD operations (create(insert)/read(select)/update/delete) for database operations
import org.springframework.data.jpa.repository.Modifying; // method modifies database state
import org.springframework.data.jpa.repository.Query; // JPQL query
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> { // entity type user and primary key type is integer
    List<User> findByEmail(String email);   // Spring Data JPA automatically generates the query based on the method name.

    @Query("SELECT u FROM User u where u.email = ?1")   // custom query ?1 is a placeholder for method parameter aka email
    public User findUserByEmail(String email);

    @Query("SELECT w FROM Workspace w INNER JOIN UserAccessWorkspace a ON (w.id = a.workspaceId) INNER JOIN User u ON (a.userId = u.id) WHERE u.id = ?1") // join the workspace to user to see that the user has access to that workspace. ?1 uses the first param of the method aka user id
    public Set<Workspace> getWorkspaces(int id);

    @Modifying
    @Transactional  // method modifies database state and happens within a transaction
    @Query("UPDATE User u SET u.password =?1 WHERE u.email =?2")    // update password based on email sent through second param ?2
    public void updateUserPasswordByEmail(String newPassword, String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM User u WHERE u.email = ?1")
    public void deleteByEmail(String email);
}
