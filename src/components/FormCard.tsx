import React, {FormEvent} from "react";
import {Button, Card, Form} from "react-bootstrap";

type Props = {
    title: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const Form1 = ({title, handleSubmit}: Props) => {

    return(
        <Card>
            <Card.Body>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <Card.Title>Ajaldatud kasumi väärtus</Card.Title>
                    <Card.Text>
                        Investor soovib osta N ettevõtte aktsiaid, mis ei ole börsiettevõte.
                        Ettevõtte omanikud on ajakirjanduse kaudu teatanud,
                        et nemad maksavad vähemalt <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="5" />
                        aastat dividende, suuruses <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="2" /> € aktsia kohta.
                        Pikaajaliseks tulumääraks antud riigis prognoositakse <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4" />% aastas.
                        Millise hinnaga oleks mõistlik aktsiat osta?
                    </Card.Text>
                    <Button variant="primary" type="submit">Submit</Button>
                </form>
            </Card.Body>
        </Card>
    );
}


export default Form1;
