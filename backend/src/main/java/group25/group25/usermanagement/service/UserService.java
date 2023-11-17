package group25.group25.usermanagement.service;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.Workspace;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface UserService {
    public User login(String email, String password);

    public User register(User userModel);

    public Set<Workspace> getWorkspaces(int id);
}
