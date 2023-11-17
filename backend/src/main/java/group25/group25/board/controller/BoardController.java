package group25.group25.board.controller;

import group25.group25.board.model.Board;
import group25.group25.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    //POST: adding new data
    @RequestMapping(method = RequestMethod.POST, path = "/addBoard", consumes = "application/json", produces = "application/json")
    public Board addBoard(@RequestBody Board board) {
        return boardService.addBoard(board);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/deleteBoard", consumes = "application/json", produces = "application/json")
    public String deleteBoard(@RequestBody Board board){
        boardService.deleteBoard(board);
        return "board deleted successfully";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/getAllBoards")
    public List<Board> getAllBoards() {
        return boardService.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/board/{id}")
    public Board getBoard(@PathVariable("id") long id) {
        return boardService.getBoard(id);
    }

}
