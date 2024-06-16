package group25.group25.list.controller;

import group25.group25.list.model.List;
import group25.group25.list.repository.ListRepository;
import group25.group25.list.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListController {
    @Autowired
    ListService listService;

    @Autowired
    ListRepository listRepository;

    @GetMapping(path = "/getLists/{id}", produces = "application/json")
    public Set<List> getLists(@PathVariable("id") int id) {
        return listService.getListsByBoardId(id);
    }

    //use board ID and title name to find the list ID
    @GetMapping(path = "/findListIdByBoardId/{boardId}/{title}")
    public Integer findListIdByBoardId(@PathVariable("boardId") int boardId,@PathVariable("title") String title){
        return listService.findCorrespondingListIdByBoardIdAndTitle(boardId,title);
    }

    @PostMapping(path = "/addList", consumes = "application/json", produces = "application/json")
    public List addList(@RequestBody List list) {
        return listService.saveList(list);
    }

}
