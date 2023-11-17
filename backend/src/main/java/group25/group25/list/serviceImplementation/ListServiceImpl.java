package group25.group25.list.serviceImplementation;

import group25.group25.list.model.List;
import group25.group25.list.repository.ListRepository;
import group25.group25.list.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@Component
public class ListServiceImpl implements ListService {
    @Autowired
    private ListRepository listRepository;

    @Override
    public Set<List> getListsByBoardId(int boardId) {
        return listRepository.findByBoardId(boardId);
    }

    @Override
    public List saveList(List list) {
        return listRepository.save(list);
    }

    @Override
    public Integer findCorrespondingListID( int boardId, String title){
        return listRepository.findCorrespondingListID(boardId,title);
    }

}
