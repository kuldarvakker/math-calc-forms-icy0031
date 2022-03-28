import React from 'react';
import {Container, Col, Row, Form, Card} from "react-bootstrap";
import Form1 from "./components/FormCard";

function App() {

  return (
      <div>
          <Container style={{"marginTop": "1.5rem"}}>
              <Row>
                  <Col />
                  <Col md={6}>
                      <Form1
                          // handleSubmit={(event : FormEvent<HTMLFormElement>) => {
                          // alert("aaa");
                          // }}

                          // cardText={Investor soovib osta N ettevõtte aktsiaid, mis ei ole börsiettevõte.
                          //    Ettevõtte omanikud on ajakirjanduse kaudu teatanud,
                          //    et nemad maksavad vähemalt <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="5" />}

                      />
                  </Col>
                  <Col />
              </Row>
          </Container>
      </div>
  );
}

export default App;
