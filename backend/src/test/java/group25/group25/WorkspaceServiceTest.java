package group25.group25;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.UserAccessWorkspaceRepository;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.serviceImplementation.WorkspaceServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WorkspaceServiceTest {
    @Mock
    WorkspaceRepository workspaceRepository;
    @Mock
    UserAccessWorkspaceRepository accessRepository;
    @Mock
    UserRepository userRepository;
    @InjectMocks
    WorkspaceServiceImpl workspaceService;

    @Test
    void testSaveWorkspace() {
        when(workspaceRepository.save(any(Workspace.class))).thenReturn(new Workspace());

        Workspace workspace = new Workspace("Test workspace", "Description");
        Workspace saved = workspaceService.saveWorkspace(workspace);

        Assertions.assertNotNull(saved);
    }

    @Test
    void testFindAll() {
        List<Workspace> workspaces = new ArrayList<>();

        when(workspaceRepository.findAll()).thenReturn(workspaces);

        List<Workspace> workspacesFromFindAll = workspaceService.findAll();

        Assertions.assertNotNull(workspaces);
        Assertions.assertNotNull(workspacesFromFindAll);
    }

    @Test
    void testAssignWorkspaceUser_newOrExisting() {
        when(accessRepository.existsByUserIdAndWorkspaceId(anyInt(), anyInt())).thenReturn(false); // Empty repository
        when(accessRepository.existsByUserIdAndWorkspaceId(0, 0)).thenReturn(true); // 0,0 exists

        User user1 = new User();
        User user2 = new User();
        user1.setId(0);
        user2.setId(1);
        List<User> users1 = new ArrayList<>();
        List<User> users2 = new ArrayList<>();
        users1.add(user1);
        users2.add(user2);

        when(userRepository.findByEmail("test@gmail.com")).thenReturn(users1);
        when(userRepository.findByEmail("admin@email.com")).thenReturn(users2);

        Map<String, String> invalidJson = new HashMap<>();
        invalidJson.put("userEmail", "test@gmail.com");
        invalidJson.put("workspaceId", "0");

        Map<String, String> validJson = new HashMap<>();
        validJson.put("userEmail", "admin@email.com");
        validJson.put("workspaceId", "0");

        Assertions.assertTrue(workspaceService.assignWorkspaceUser(validJson));
        Assertions.assertFalse(workspaceService.assignWorkspaceUser(invalidJson));
    }

    @Test
    void testFindWorkspaceById() {
        Workspace workspace = new Workspace();
        Optional<Workspace> optional = Optional.of(workspace);
        when(workspaceRepository.findById(0)).thenReturn(optional);

        Assertions.assertNotNull(workspaceService.findById(0));
        Assertions.assertNull(workspaceService.findById(1));
    }
}
