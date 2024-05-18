package group25.group25;

import group25.group25.usermanagement.controller.UserController;
import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;    // when, verify, any  methods

@SpringBootTest
public class ForgetPasswordTest {

    @MockBean   // add a mock
    UserRepository userRepository;

    @Autowired  // add an instance
    UserController controller;

    @Test
    void testShowUserByPassword(){
        String mail = "testPassword@test.com";
        User tempUser = new User("testPassword@test.com","testFname","testLname","testPassword","testUsername", "answer");

        // when used to define behavior of mock, thenReturn says what should be returned when the method inside 'when' is called
        // so it's saying when we use showUserByPassword, it should return the temp user we created
        when(controller.showUserByPassword(mail)).thenReturn(tempUser);

        // assertEquals(expected, actual, message);
        assertEquals(tempUser, controller.showUserByPassword(mail),"wrong testShowUserByPassword");
    }

    @Test
    void testUpdateUserPasswordByEmail(){
        String newPassword = "newPassword";
        String mail = "testPassword@test.com";
        userRepository.updateUserPasswordByEmail(newPassword,mail);

        // verify is used to check if the method was called on an object
        verify(userRepository).updateUserPasswordByEmail(newPassword,mail);
    }


}
