package group25.group25.usermanagement.controller;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.usermanagement.service.UserService;
import group25.group25.workspace.model.Workspace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    //TODO: User repository should be dealt with on service layer
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;

    @RequestMapping(value = "getusers", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "getUser/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable("id") int id) {
        return userRepository.findById(id).orElse(null);
    }

    @RequestMapping(value = "getUserByEmail/{email}", method = RequestMethod.GET)
    public List<User> getUserByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }

    @PostMapping(value = "login", consumes = "application/json", produces = "application/json")
    public User login(@RequestBody User user){
        return  userService.login(user.getEmail(), user.getPassword());
    }

    @GetMapping(value = "getWorkspaces/{id}", produces = "application/json")
    public Set<Workspace> getWorkspaces(@PathVariable("id") int id) {
        return userService.getWorkspaces(id);
    }

    @PostMapping(path = "/saveUser", consumes = "application/json", produces = "application/json")
    public User registerAccount(@RequestBody User userModel){
        return userService.register(userModel);
    }

    // Password/security question management

    // update the password by entered mail
    @PostMapping (path = "/updateUserPasswordByEmail")
    public void updateUserPasswordByEmail(@RequestParam(name = "newPassword") String newPassword,@RequestParam(name = "email") String email){
        userRepository.updateUserPasswordByEmail(newPassword,email);
    }

    //input the mail and show user information
    @GetMapping(path = "/showUserByPassword/{mail}")
    public User showUserByPassword(@PathVariable String mail){
        return userRepository.findUserByEmail(mail);
    }
}