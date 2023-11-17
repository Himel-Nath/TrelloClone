package group25.group25.board.service;

import group25.group25.board.model.Board;
import group25.group25.board.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {

    public List<Board> findAll();

    public Board deleteBoard(Board board);

    public Board addBoard(Board board);

    public Board getBoard(long id);
}

