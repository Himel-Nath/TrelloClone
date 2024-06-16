package group25.group25.list.repository;

import group25.group25.list.model.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ListRepository extends JpaRepository<List, Integer> {
    Set<List> findByBoardId(int boardId);

    @Query(" select id from List WHERE boardId =?1 AND title =?2")  // find list id given board id and title
    Integer findCorrespondingListIdByBoardIdAndTitle(int boardId, String title);

}
