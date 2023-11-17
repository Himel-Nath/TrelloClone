package group25.group25.task.service;

import group25.group25.task.model.Task;
import org.springframework.stereotype.Service;


@Service
public interface TaskService {


    public Task saveTask(Task task);


}
