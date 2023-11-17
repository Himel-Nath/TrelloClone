package group25.group25;

import java.util.ArrayList;
import java.util.List;

import group25.group25.board.model.Board;
import group25.group25.board.repository.BoardRepository;
import group25.group25.board.serviceimpl.BoardServiceImpl;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BoardServiceImplTest {
    @Mock
    private BoardRepository boardRepository;

    @InjectMocks
    private BoardServiceImpl boardServiceimpl = new BoardServiceImpl();

    @Test
    public void addBoardTest(){
        Board board = new Board();
        //Long boardId, String dateCreated, String description, String boardTitle
        board.setId(10L);
        board.setDescription("testing");
        board.setDateCreated("July 2022");
        board.setTitle("Test");
        Mockito.when(boardRepository.save(board)).thenReturn(board);

        Board savedBoard = boardServiceimpl.addBoard(board);
        assertNotNull(savedBoard);
        assertEquals(savedBoard, board);

    }

    @Test
    public void deleteBoardTest(){
        Board board = new Board();
        //Long boardId, String dateCreated, String description, String boardTitle
        board.setId(10L);
        board.setDescription("testing");
        board.setDateCreated("July 2022");
        board.setTitle("Test");

        boardServiceimpl.addBoard(board);
        Board deletedBoard = boardServiceimpl.deleteBoard(board);
        assertNotNull(deletedBoard);

    }


    @Test
    public void findAllBoardTest(){

        List<Board> board = new ArrayList<>();

        when(boardRepository.findAll()).thenReturn(board);

        List<Board> boardsFromFindAll = boardServiceimpl.findAll();

        Assertions.assertNotNull(board);
        Assertions.assertNotNull(boardsFromFindAll);
    }
}
