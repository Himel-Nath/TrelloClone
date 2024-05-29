package group25.group25;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import group25.group25.usermanagement.serviceImplementation.UserServiceImpl;

@SpringBootTest
public class VerifyLoginTest {

    @Autowired
    private UserRepository UserRepository;
    @Autowired
    private UserServiceImpl UserServices;

    @BeforeEach
    void setUpUser(){
        // Delete any existing user with the same email address
        if (!UserRepository.findByEmail("test@email.com").isEmpty()) {
            UserRepository.deleteByEmail("test@email.com");
        }

        User user = new User("test@email.com", "Tom", "Scott", "pass", "username","cat");
        UserRepository.save(user);
    }

    @Test
    void testValidateLogin(){
        User user = new User("test@email.com", "Tom", "Scott", "pass", "username","cat");

        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getEmail(), user.getEmail());
        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getPassword(), user.getPassword());
        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getFirstName(), user.getFirstName());
        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getUsername(), user.getUsername());
        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getSecurityAnswer(),user.getSecurityAnswer());
        Assertions.assertEquals(UserServices.login("test@email.com", "pass").getPassword(),user.getPassword());

        Assertions.assertNull(UserServices.login("test@email.com","unpass"));
    }



}
