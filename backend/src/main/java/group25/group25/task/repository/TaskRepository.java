package group25.group25.task.repository;

import group25.group25.task.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TaskRepository extends JpaRepository<Task, Integer>{

    @Query("SELECT t FROM Task t where t.date = ?1")
    List<Task> findByDueDate (String date);

    @Query("SELECT t FROM Task t where t.title = ?1")
    List<Task> findByTitle(String title);

    @Query("SELECT t FROM Task t where t.assigneeId = ?1")
    List<Task> findByAssigneeId(Integer assigneeId);

    @Query("SELECT t FROM Task t where t.listId = ?1")
    List<Task> findByListId(Integer list_id);

    @Modifying
    @Query("UPDATE Task t SET t.listId =?1 WHERE t.id =?2")
    void updateStatusById(Integer listId, Integer id);

    @Modifying
    @Query("UPDATE Task t SET t.date =?1 WHERE t.id =?2")
    void updateDueDateById(String dueDate, Integer id);

    @Modifying
    @Query("UPDATE Task t SET t.assigneeId =?1 WHERE t.id =?2")
    void updateUserById(Integer assigneeId, Integer id);
}
