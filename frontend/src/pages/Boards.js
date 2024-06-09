import { useEffect } from 'react';
import ViewBoards from '../components/boards/ViewBoards';

function Boards() {
    const  [boardsData, setBoardsData] = useState([]);
    function getAllBoards() {
        fetch('http://localhost:9000/board')
        .then(response => response.json())
        .then(boards => {
                setBoardsData(boards);
        });
    };

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
