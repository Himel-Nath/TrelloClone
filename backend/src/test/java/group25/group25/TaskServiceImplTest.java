package group25.group25;

import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.serviceimplementation.TaskServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@SpringBootTest
class TaskServiceImplTest {

    @Mock
    TaskRepository taskRepository;


    @InjectMocks
    TaskServiceImpl taskService;


    @Test
    void testSaveTask() {
        Task task = new Task();
        when(taskRepository.save(any(Task.class))).thenReturn(new Task());
        Task saved = taskService.saveTask(task);

        Assertions.assertNotNull(saved);
    }

    @Test
    void testFindByDueDate() {
        List<Task> taskList = new ArrayList<>();
        when(taskRepository.findByDueDate(anyString())).thenReturn(taskList);
        List<Task> taskList1 = taskRepository.findByDueDate("2022-07-02 00:00:00");
        Assertions.assertNotNull(taskList);
        Assertions.assertNotNull(taskList1);
    }

    @Test
    void testFindByTitle() {
        List<Task> taskList = new ArrayList<>();
        when(taskRepository.findByTitle(anyString())).thenReturn(taskList);
        List<Task> taskList1 = taskRepository.findByDueDate("todo111");
        Assertions.assertNotNull(taskList);
        Assertions.assertNotNull(taskList1);
    }

    @Test
    void testFindByUser() {
        List<Task> taskList = new ArrayList<>();
        when(taskRepository.findByAssigneeId(anyInt())).thenReturn(taskList);
        List<Task> taskList1 = taskRepository.findByAssigneeId(0);
        Assertions.assertNotNull(taskList);
        Assertions.assertNotNull(taskList1);
    }

    @Test
    void testFindByListID() {
        List<Task> taskList = new ArrayList<>();
        when(taskRepository.findByListId(anyInt())).thenReturn(taskList);
        List<Task> taskList1 = taskRepository.findByListId(1);
        Assertions.assertNotNull(taskList);
        Assertions.assertNotNull(taskList1);

    }

    @Test
    void testUpdateStatusById() {
        int newListId = 2;
        int taskId = 5;
        taskRepository.updateStatusById(newListId,taskId);
        verify(taskRepository).updateStatusById(newListId,taskId);
    }

    @Test
    void testUpdateDueDateById() {
        String newDueDate = "2022-07-19 05:22:00";
        int taskId = 5;
        taskRepository.updateDueDateById(newDueDate,taskId);
        verify(taskRepository).updateDueDateById(newDueDate,taskId);
    }

    @Test
    void testUpdateUserById() {
        int taskId = 5;
        taskRepository.updateUserById(0,taskId);
        verify(taskRepository).updateUserById(0,taskId);
    }
}