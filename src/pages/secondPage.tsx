import React, {useState} from 'react';
import {Container, Col, Row, Form} from "react-bootstrap";
import FormCard from "../components/FormCard"
import {
    AjaldatudKasumiVaartus,
    Roi,
    Tulumaar,
    RoiYearly,
    RoaRoe,
    TasuvusAeg,
    TasuvusPunkt, Eps, EpsDiv, Npv
} from "../formulas/AjaldatudKasumiVaartus";

function SecondPage() {

    const [state, setState] = useState([NaN, "No answer"]);

    return (
        <div>
            <Container style={{"marginTop": "1.5rem", "display": "flex", "justifyContent": "space-between", "flexWrap": "wrap"}}>
                <FormCard
                    title={'Ajaldatud kasumi väärtus'}
                    handleSubmit={(e) => setState(AjaldatudKasumiVaartus(e))}
                    text={[
                        'Investor soovib osta N ettevõtte aktsiaid, mis ei ole börsiettevõte. Ettevõtte omanikud on ajakirjanduse kaudu teatanud, et nemad maksavad vähemalt ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="5"/>,
                        ' aastat dividende, suuruses ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="2"/>,
                        ' € aktsia kohta. Pikaajaliseks tulumääraks antud riigis prognoositakse ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4"/>,
                        ' % aastas. Millise hinnaga oleks mõistlik aktsiat osta?'
                    ]}
                    answer={state}
                />
            </Container>
        </div>
    );
}

export default SecondPage;