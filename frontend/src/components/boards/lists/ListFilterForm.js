import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ListFilterForm(props) {

    return (
        <Card className="mb-5">
            <Card.Header>
                <Card.Title>
                    Filters
                </Card.Title>
            </Card.Header>

            <Card.Body>
            <Form as={Row}>
                <Col>
                    <Form.Group controlId="formSearch">
                        <Form.Label>Search Task Title</Form.Label>
                        <TextField
                            id="outlined-basic"
                            onChange={props.onSearchChangeHandler}
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formDateFilter">
                        <Form.Label>Due Date</Form.Label>
                        <DatePicker
                            selected={props.startDate}
                            onChange={props.onDateChangeHandler}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    {/* Select dropdown for due date filtering */}
                    <Form.Group controlId="formDueDateFilter">
                        <Form.Label>Due Date Filter Mode</Form.Label>
                        <Form.Control as="select" onChange={props.onDueDateChangeHandler}>
                            <option value="">Don't filter by date</option>
                            <option value="on">Show only tasks due on date</option>
                            <option value="before">Show only tasks due before date</option>
                            <option value="after">Show only tasks due after date</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Form>
            </Card.Body>
        </Card>
    );
}

export default ListFilterForm;