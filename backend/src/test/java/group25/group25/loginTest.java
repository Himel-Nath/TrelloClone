package group25.group25;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import group25.group25.usermanagement.serviceImplementation.UserServiceImpl;

@SpringBootTest
public class loginTest {


    @Autowired
    private UserRepository UserRepository;
    @Autowired
    private UserServiceImpl UserServices;



    @Test
    void validLogin(){

        User user = new User("test@email.com", "Tom", "Scott", "rrr", "doweevenneedthisfield","cat");


        Assertions.assertTrue(UserServices.login("test@email.com","rrr").getEmail().equals(user.getEmail()));
        Assertions.assertTrue(UserServices.login("test@email.com","rrr").getPassword().equals(user.getPassword()));
        Assertions.assertTrue(UserServices.login("test@email.com","rrr").getFirstName().equals(user.getFirstName()));
        Assertions.assertTrue(UserServices.login("test@email.com","rrr").getUsername().equals(user.getUsername()));

        Assertions.assertNull(UserServices.login("test@email.com","bsd"));


    }



}
