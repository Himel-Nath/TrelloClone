import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TaskCard from "./TaskCard";

function List(props) {
    const [tasks, setTasks] = useState([]);
    const [searchFilteredTasks, setSearchFilteredTasks] = useState([]);
    const [dateFilteredTasks, setDateFilteredTasks] = useState([]);
    const { id, boardId } = useParams();
    
    const fetchTasks = () => {
        axios.get(`http://localhost:8080/getTaskByList/${props.list.id}`)
            .then(response => {
                const tasks = response.data;
                
                // Sort tasks by id
                tasks.sort((a, b) => a.id - b.id);

                setTasks(tasks);
                setSearchFilteredTasks(tasks);
                setDateFilteredTasks(tasks);
            });
    }

    const filterList = (filterText, filterDate, filterDateMode) => {
        // Filter by search text
        setSearchFilteredTasks(tasks.filter(task => task.title.toLowerCase().includes(filterText)));
        
        // Filter by due date
        // props.filterDate is a Date object representing the user's selected date
        // props.filterDateMode is a string representing the user's selected date mode
        // Can be "", "on", "before", or "after"
        setDateFilteredTasks(tasks.filter(task => {
            const taskDate = new Date(task.date);
            if (filterDateMode === "") {
                return true;
            } else if (filterDateMode === "on") {
                return taskDate.getFullYear() === filterDate.getFullYear() &&
                    taskDate.getMonth() === filterDate.getMonth() &&
                    taskDate.getDate() + 1 === filterDate.getDate();
            } else if (filterDateMode === "before") {
                return taskDate < filterDate;
            } else if (props.filterDateMode === "after") {
                return taskDate > filterDate;
            }
        }));
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filter on filterText change
    useEffect(() => {
        filterList(props.filterText, props.filterDate, props.filterDateMode);
    }, [props.filterText, props.filterDate, props.filterDateMode]);

    return (
        <Card className="bg-light">
            <Card.Body>
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Text>{props.list.description}</Card.Text>

                {/* Render all task cards */}
                {/* Task cards are filtered by both search and date, get intersection and map those */}
                {(searchFilteredTasks.filter(task => dateFilteredTasks.includes(task))).map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}

                {/* New task button */}
                <Button
                    variant="outline-primary"
                    href={`/workspaces/${id}/${boardId}/${props.list.id}/createTask`}
                    className="w-100 mt-3"
                >
                    New Task
                </Button>
            </Card.Body>
        </Card>
    );
}

export default List;