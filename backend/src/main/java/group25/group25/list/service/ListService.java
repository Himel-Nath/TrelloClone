package group25.group25.list.service;

import group25.group25.list.model.List;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface ListService {
    public Set<List> getListsByBoardId(int boardId);
    public List saveList(List list);
    public Integer findCorrespondingListIdByBoardIdAndTitle(int boardId, String title);
    }
