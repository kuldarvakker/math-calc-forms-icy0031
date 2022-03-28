import React, {FormEvent} from 'react';
import './App.css';
import {Card, Button, Form, Container, Col, Row} from "react-bootstrap";

// type Props = {
//     handleSubmit: (event: FormEvent<HTMLElement>) => void,
// };

const Form1 = () => {


    // const handleSubmit = props.handleSubmit as Props.handleSubmit;

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Array.from(event.target as HTMLFormElement).forEach((input) => {
            console.log(input);
        });
    }

    return(
        <Card>
            <Card.Body>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Card.Title>Ajaldatud kasumi väärtus</Card.Title>
                    <Card.Text>
                        Investor soovib osta N ettevõtte aktsiaid, mis ei ole börsiettevõte.
                        Ettevõtte omanikud on ajakirjanduse kaudu teatanud,
                        et nemad maksavad vähemalt <input type="text" placeholder="5" /> aastat dividende, suuruses <input type="text" placeholder="2"/> € aktsia kohta.
                        Pikaajaliseks tulumääraks antud riigis prognoositakse <input type="text" placeholder="4" />% aastas.
                        Millise hinnaga oleks mõistlik aktsiat osta?
                    </Card.Text>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}


function App() {

  return (
      <div>
          <Container style={{"marginTop": "1.5rem"}}>
              <Row>
                  <Col />
                  <Col lg={6}>
                      <Form1
                          // handleSubmit={(event : FormEvent<HTMLFormElement>) => {
                          // alert("aaa");
                          // }}

                      />
                  </Col>
                  <Col />
              </Row>
          </Container>
      </div>
  );
}

export default App;
