import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ListNames from "./ShowAllListName";

//用不上了

function ShowAllListName(props) {
    const {id, boardId} = useParams();

    return (
        <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="ToDo"
            name="radio-buttons-group"
        >
        <FormControlLabel
                value= {props.boards.title}
                control={<Radio />} 
                // checked={selected === 'ToDo'}
                // onChange={handleChange}
                label= {props.boards.title}
            />
        </RadioGroup>
        </FormControl>


    );
}

export default ShowAllListName;