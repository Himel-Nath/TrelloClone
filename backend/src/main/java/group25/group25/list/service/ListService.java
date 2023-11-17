package group25.group25.list.service;

import group25.group25.list.model.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Set;

@Service
public interface ListService {
    public Set<List> getListsByBoardId(int boardId);
    public List saveList(List list);
    public Integer findCorrespondingListID( int boardId, String title);
    }
