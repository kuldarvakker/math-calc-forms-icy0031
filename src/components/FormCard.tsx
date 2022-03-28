import React, {FormEvent} from "react";
import {Button, Card, Form} from "react-bootstrap";

type Props = {
    title: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    text: any[];
};

const Form1 = ({title, text, handleSubmit}: Props) => {

    return(
        <Card>
            <Card.Body>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text.map(elem => elem)}
                    </Card.Text>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


export default Form1;
