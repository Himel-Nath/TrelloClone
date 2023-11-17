import { useEffect } from 'react';
import ViewBoards from '../components/boards/ViewBoards';

function Boards() {
    /* ToDo: Create state using useState hook for boards data */
    const  [boardsData, setBoardsData] = useData([]);
    function getAllBoards() {
        /* ToDo: Implement getAllBoards function */
        fetch('http://localhost:9000/board')
        .then(response => response.json())
        .then(boards => {
                setBoardsData(boards);
        });
    };

    /* ToDo: Use useEffect hook to call getAllBoards() */
    useEffect(function(){
        getAllBoards();
    }, [])

    return (
        <section>
            <ViewBoards boards={boardsData}/>
        </section>
    );
};

export default Boards;
