package group25.group25.board.serviceimpl;

import group25.group25.board.model.Board;
import group25.group25.board.repository.BoardRepository;
import group25.group25.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardRepository boardRepository;

    @Override

    public Board addBoard(Board board) {
       return boardRepository.save(board);
    }

    @Override
    public List<Board> findAll() {
        return boardRepository.findAll();
    }

    @Override
    public Board deleteBoard(Board board){
        boardRepository.delete(board);
        return board;
    }

    @Override
    public Board getBoard(long id) {
        return boardRepository.getBoard(id);
    }

}
