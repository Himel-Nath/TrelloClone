import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import List from "../components/boards/lists/List";
import ListFilterForm from "../components/boards/lists/ListFilterForm";

function BoardPage() {
    // Get the workspace id and board id from the URL
    const {id, boardId} = useParams();

    // Loading state for the board
    const [loading, setLoading] = useState(true);

    // Board data
    const [board, setBoard] = useState();

    // Filter stuff
    const [inputText, setInputText] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [dueDateFilterMode, setDueDateFilterMode] = useState("");
    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const dateChangeHandler = (date) => {
        setStartDate(date);
    };
    const dueDateChangeHandler = (e) => {
        setDueDateFilterMode(e.target.value);
    }

    // Get board data from backend
    const getBoard = () => {
        axios.get(`http://localhost:8080/board/${boardId}`)
            .then(response => {
                const board = response.data;
                const task = [];

                for (let i = 0; i < board.lists.length; i++) {
                    const list = board.lists[i];
                    for (let j = 0; j < list.tasks.length; j++) {
                        task.push(list.tasks[j]);
                    }
                }
                console.log(task);

                // Sort lists by id
                board.lists.sort((a, b) => {
                    return a.id - b.id;
                });

                setBoard(response.data);
                setLoading(false);
            }
        );
    }

    // Get the board data from the backend
    useEffect(() => {
        getBoard();
    }, []);

    if (loading) {
        return <div>Loading board...</div>;
    }

    return (
        <Container>
            <Row className="my-4">
                <Col sm={2}>
                    <Button href={"/workspaces/"+id}>
                        Return to Workspace
                    </Button>
                </Col>
                <Col className="text-start ml-4">
                    <h1>{board.title}</h1>
                    <p>{board.description}</p>
                </Col>
            </Row>

            {/* Search filter */}
            <ListFilterForm
                onSearchChangeHandler={inputHandler}
                onDateChangeHandler={dateChangeHandler} 
                onDueDateChangeHandler={dueDateChangeHandler}
                startDate={startDate}
            />


            {/* Board lists */}
            <div className="overflow-auto d-flex flex-row pb-5">
                {board.lists.map(list => (
                    <div key={list.id} className="me-4" style={{minWidth:"13rem"}}>
                        <List
                            list={list}
                            filterText={inputText}
                            filterDate={startDate}
                            filterDateMode={dueDateFilterMode}
                        />
                    </div>
                ))}

                <div style={{minWidth:"13rem"}}>
                    <Button variant="secondary" href={`/workspaces/${id}/${boardId}/createList`} className="w-100">
                        Create List
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default BoardPage;