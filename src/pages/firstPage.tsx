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
} from "../formulas/FirstPageFormulas";

function FirstPage() {

    const [state, setState] = useState([NaN, "No answer"]);
    const [state1, setState1] = useState([NaN, "No answer"]);
    const [roi, setRoi] = useState([NaN, "No answer"]);
    const [roiYearly, setRoiYearly] = useState([NaN, "No answer"]);
    const [roa, setRoa] = useState([NaN, "No answer"]);
    const [roe, setRoe] = useState([NaN, "No answer"]);
    const [tasuvusAeg, setTasuvusAeg] = useState([NaN, "No answer"]);
    const [tasuvusPunkt, setTasuvusPunkt] = useState([NaN, "No answer"]);
    const [eps, setEps] = useState([NaN, "No answer"]);
    const [epsDiv, setEpsDiv] = useState([NaN, "No answer"]);
    const [npv, setNpv] = useState([NaN, "No answer"]);



    return (
        <div>
            <div style={{"padding": "30px", "gap": "28px", "display": "flex", "width": "100%", "flexWrap": "wrap"}}>
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
                        'Teada on, et ettevõtte ühe kuu muutuvkulud on ',
                        <Form.Control type="text" style={{display: "inline", width: "7rem"}} placeholder="7000"/>,
                        '  €, sama perioodi püsikulud on ',
                        <Form.Control type="text" style={{display: "inline", width: "5rem"}} placeholder="200"/>,
                        ' € ja toote läbimüük ',
                        <Form.Control type="text" style={{display: "inline", width: "7rem"}} placeholder="8000"/>,
                        ' €. Kui suure summa eest peab ettevõtja toodet müüma, et jõuda kasumisse?'
                    ]}
                    answer={tasuvusPunkt}
                />

                <FormCard
                    title={'EPS (Earnings per Share)'}
                    handleSubmit={(e) => setEps(Eps(e))}
                    text={[
                        'Ettevõtte aktsiate arv on ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="800000"/>,
                        ' ja aasta puhaskasum oli ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="200000"/>,
                        ' €. Aktsionäride üldkoosolek otsustas dividendidena välja maksta ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="1800000"/>,
                        ' €. Arvuta antud ettevõtte EPS väärtus'
                    ]}
                    answer={eps}
                />

                <FormCard
                    title={'EPS with Dividends'}
                    handleSubmit={(e) => setEpsDiv(EpsDiv(e))}
                    text={[
                        'Ettevõtte aktsiate arv on ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="800000"/>,
                        ' ja eelisaktsiate arv ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="200000"/>,
                        ' .Aasta puhaskasum oli ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="1800000"/>,
                        ' €. Eelisaktsiatel makstakse igal aastal ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="1.8"/>,
                        ' € aktsia kohta. Aktsionäride üldkoosolek otsustas dividendidena \n' +
                        'välja maksta ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="18000"/>,
                        ' €. Arvuta antud ettevõtte EPS väärtus.'
                    ]}
                    answer={epsDiv}
                />

                <FormCard
                    title={'NPV'}
                    handleSubmit={(e) => setNpv(Npv(e))}
                    text={[
                        'Ettevõtte plaanib teha investeeringut suuruses Sk = ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="800000"/>,
                        ' €, mis investorite arvates peaks ära tasuma nelja aastaga. ',
                        <br />,
                        'Samal ajal on teada, et esimese aasta kasumiks prognoositakse ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="200000"/>,
                        ' €, teisel aastal ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="1800000"/>,
                        ' €, kolmandal aastal ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="18000000"/>,
                        ' € neljandal aastal ca ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="18000"/>,
                        ' €. Eeldatav keskmine reaalne tulumäär neljal vaadeldaval aasta oleks',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="4"/>,
                        ' % aastas. Kas investorite ootused on põhjendatud? Leidke NPV väärus!'
                    ]}
                    answer={npv}
                />

            </div>
        </div>
    );
}

export default FirstPage;
