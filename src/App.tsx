import React, {useState} from 'react';
import {Container, Col, Row, Form} from "react-bootstrap";
import FormCard from "./components/FormCard";
import {
    AjaldatudKasumiVaartus,
    Roi,
    Tulumaar,
    RoiYearly,
    RoaRoe,
    TasuvusAeg,
    TasuvusPunkt
} from "./formulas/AjaldatudKasumiVaartus";

function App() {

    const [state, setState] = useState([NaN, "No answer"]);
    const [state1, setState1] = useState([NaN, "No answer"]);
    const [roi, setRoi] = useState([NaN, "No answer"]);
    const [roiYearly, setRoiYearly] = useState([NaN, "No answer"]);
    const [roa, setRoa] = useState([NaN, "No answer"]);
    const [roe, setRoe] = useState([NaN, "No answer"]);
    const [tasuvusAeg, setTasuvusAeg] = useState([NaN, "No answer"]);
    const [tasuvusPunkt, setTasuvusPunkt] = useState([NaN, "No answer"]);


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

                <FormCard
                    title={'Investori tulumäär'}
                    handleSubmit={(e) => setState1(Tulumaar(e))}
                    text={[
                        ' Investor ostis börsilt aktsiaid ',
                        <Form.Control type="text" style={{display: "inline", width: "7rem"}} placeholder="5"/>,
                        ' € ulatuses ja müüs nad maha ',
                        <Form.Control type="text" style={{display: "inline", width: "5rem"}} placeholder="2"/>,
                        ' päeva pärast teenides nende eest pärast teenustasude maha arvamist ',
                        <Form.Control type="text" style={{display: "inline", width: "7rem"}} placeholder="4"/>,
                        ' €. Kui suur oli selle investori tulumäär?'
                    ]}
                    answer={state1}
                />

                <FormCard
                    title={'ROI'}
                    handleSubmit={(e) => setRoi(Roi(e))}
                    text={[
                        'Investor ostis kinnisvara ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="500000"/>,
                        ' € eest ja müüs selle kahe aasta pärast maha ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="2200000"/>,
                        ' € eest.'
                    ]}
                    answer={roi}
                />

                <FormCard
                    title={'ROI yearly'}
                    handleSubmit={(e) => setRoiYearly(RoiYearly(e))}
                    text={[
                        'Investor ostis kinnisvara ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="500000"/>,
                        ' € eest ja müüs selle ',
                        <Form.Control type="text" style={{display: "inline", width: "5rem"}} placeholder="453"/>,
                        ' päeva pärast maha ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="2200000"/>,
                        ' € eest.'
                    ]}
                    answer={roiYearly}
                />

                <FormCard
                    title={'ROA'}
                    handleSubmit={(e) => setRoa(RoaRoe(e))}
                    text={[
                        'Ettevõtte aastane puhaskasum oli ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="500000"/>,
                        ' €. Aktivate väärtus ettevõtte bilansi kohaselt olid ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="453000"/>,
                        ' €. Kui suur on ettevõtte ROA.'
                    ]}
                    answer={roa}
                />

                <FormCard
                    title={'ROE'}
                    handleSubmit={(e) => setRoe(RoaRoe(e))}
                    text={[
                        'Ettevõtte aastane puhaskasum oli ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="500000"/>,
                        ' €. Aktsionäride omakapital on ettevõtte bilansi kohaselt olid ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="45000"/>,
                        ' €. Kui suur on ettevõtte ROE.'
                    ]}
                    answer={roe}
                />

                <FormCard
                    title={'Tasuvusaeg'}
                    handleSubmit={(e) => setTasuvusAeg(TasuvusAeg(e))}
                    text={[
                        'Ettevõtte kavatseb teha uude tehnoloogiasse investeeringut ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5000000"/>,
                        ' €. Prognooside kohaselt peaks see tagama iga-aastase sissetuleva rahavoo ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="880000"/>,
                        ' €. Mitme aastaga tasub ära mainitud investeering?'
                    ]}
                    answer={tasuvusAeg}
                />

                <FormCard
                    title={'Tasuvuspunkt'}
                    handleSubmit={(e) => setTasuvusPunkt(TasuvusPunkt(e))}
                    text={[
                        'Ettevõtte kavatseb teha uude tehnoloogiasse investeeringut ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5000000"/>,
                        ' €. Prognooside kohaselt peaks see tagama iga-aastase sissetuleva rahavoo ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="880000"/>,
                        ' €. Mitme aastaga tasub ära mainitud investeering?'
                    ]}
                    answer={tasuvusPunkt}
                />

            </Container>
        </div>
    );
}

export default App;
