package group25.group25;

import group25.group25.list.model.List;
import group25.group25.list.repository.ListRepository;
import group25.group25.list.serviceImplementation.ListServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ListServiceTest {
    @Mock
    ListRepository listRepository;

    @InjectMocks
    ListServiceImpl listService;

    @Test
    void testGetListsByBoardId() {
        when(listRepository.findByBoardId(anyInt())).thenReturn(new HashSet<>());
        Assertions.assertNotNull(listService.getListsByBoardId(anyInt()));
    }

    @Test
    void testSaveList() {
        when(listRepository.save(any(List.class))).thenReturn(new List());
        Assertions.assertNotNull(listService.saveList(new List()));
    }
}
