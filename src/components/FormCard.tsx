import React, {FormEvent} from "react";
import {Button, Card, Form} from "react-bootstrap";

type Props = {
    title: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    text: any[];
    answer: any[];
};

const FormCard = ({title, text, answer, handleSubmit}: Props) => {

    return(
        <Card className="mb-4">
            <Card.Body>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text.map(elem => <span key={text.indexOf(elem)}>{elem}</span>)}
                    </Card.Text>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted">{answer[0]} <br /> {answer[1]}</Card.Footer>
        </Card>
    );
}


export default FormCard;
