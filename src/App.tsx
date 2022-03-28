import React, {FormEvent, useState} from 'react';
import {Container, Col, Row, Form} from "react-bootstrap";
import FormCard from "./components/FormCard";

function App() {

    const [state, setState] = useState([NaN, "No answer"]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let unCheckedFloats = [...Array.from(event.target as HTMLFormElement)
            .map(i => parseFloat((i as HTMLInputElement).value))];
        let numbers = [...unCheckedFloats.filter(elem => !isNaN(elem))];

        let a = numbers[0];
        let b = numbers[1];
        let c = numbers[2] / 100;

        let result : number = 0;
        let resultString : string = "";
        for (let i = 1; i < a + 1; i++) {
            resultString += b + "/" + "(" + 1 + "+ " + c + ")" + "**" + i;
            if (i < a) {
                resultString += " + ";
            }
            result += b / Math.pow((1 + c), i);
        }
        setState([result, resultString]);
    }

    return (
        <div>
            <Container style={{"marginTop": "1.5rem"}}>
                <Row>
                    <Col/>
                    <Col md={6}>
                        <FormCard
                            title={'Ajaldatud kasumi väärtus'}
                            handleSubmit={(e) => handleSubmit(e)}
                            text={[
                                'Investor soovib osta N ettevõtte aktsiaid, mis ei ole börsiettevõte. Ettevõtte omanikud on ajakirjanduse kaudu teatanud, et nemad maksavad vähemalt ',
                                <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="5" />,
                                ' aastat dividende, suuruses ',
                                <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="2" />,
                                ' € aktsia kohta. Pikaajaliseks tulumääraks antud riigis prognoositakse ',
                                <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4" />,
                                ' % aastas. Millise hinnaga oleks mõistlik aktsiat osta?'
                                ]}
                            answer={state}
                        />
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </div>
    );
}

export default App;
