import { useState, useEffect } from 'react';
import ViewBoards from '../components/boards/ViewBoards';

function Boards() {
    const  [boardsData, setBoardsData] = useState([]);

    // get board data and then add it to the board
    const getAllBoards = () => {
        fetch('http://localhost:9000/board')
            .then(response => response.json())
            .then(boards => {
                setBoardsData(boards);
            });
    };

    useEffect(() => {
        getAllBoards();
    }, [])

    return (
        <section>
            <ViewBoards boards={boardsData}/>
        </section>
    );
};

export default Boards;
