package group25.group25.usermanagement.serviceImplementation;
import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.usermanagement.service.UserService;
import group25.group25.workspace.model.Workspace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Set;
@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;  // automatically inject an instance of userRepo

    public User login(String email, String password) {

        // first find the user by email -> get the password of that user -> check if password matches
        if(userRepository.findUserByEmail(email).getPassword().equals(password)) {
            return userRepository.findUserByEmail(email);
        }
        return null;
    }

    public User register(User userModel) {
        return userRepository.save(userModel); // saves user to the db
    }

    public Set<Workspace> getWorkspaces(int id) {
        return userRepository.getWorkspaces(id);    // get from db
    }
}
