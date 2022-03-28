import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import FormCard from "../components/FormCard"
import {
    Tulevik, Tulevik2, Diskonto, Diskonto2, Diskonto3, Kupong
} from "../formulas/SecondPageFormulas";

function SecondPage() {

    const [state, setState] = useState([NaN, "No answer"]);
    const [state2, setState2] = useState([NaN, "No answer"]);
    const [diskonto, setDiskonto] = useState([NaN, "No answer"]);
    const [diskonto2, setDiskonto2] = useState([NaN, "No answer"]);
    const [diskonto3, setDiskonto3] = useState([NaN, "No answer"]);
    const [kupong, setKupong] = useState([NaN, "No answer"]);

    return (
        <div>
            <div style={{"padding": "30px", "gap": "28px", "display": "flex", "width": "100%", "flexWrap": "wrap"}}>
                <FormCard
                    title={'Raha tulevikuväärtus'}
                    handleSubmit={(e) => setState(Tulevik(e))}
                    text={[
                        'Investoril on ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="5"/>,
                        ' miljon €. Milline oleks selle raha tulevikuväärtus ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="2.6"/>,
                        ' aasta pärast kui keskmine tulumäär (intress), mida investor soovib teenida oleks ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4"/>,
                        ' % aastas?'
                    ]}
                    answer={state}
                />
                <FormCard
                    title={'Raha tulevikuväärtus 2'}
                    handleSubmit={(e) => setState2(Tulevik2(e))}
                    text={[
                        'Investoril on täna ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5"/>,
                        ' €. Milline oleks selle raha väärtus ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="2.6"/>,
                        ' aastat tagasi kui keskmine tulumäär sel perioodil oli ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4"/>,
                        ' % aastas?'
                    ]}
                    answer={state2}
                />

                <FormCard
                    title={'Diskonto ost'}
                    handleSubmit={(e) => setDiskonto(Diskonto(e))}
                    text={[
                        'Leida ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5"/>,
                        ' € nimiväärtusega diskontovõlakirja diskonteeritud müügihind kui intressimäär on ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="2.6"/>,
                        ' ja kuulub lunastamisele ',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="4"/>,
                        '  aasta pärast? Inflatsioon pole teada ja seetõttu seda arvesse ei võeta.',
                        <br />,
                        'a) Mis hinnaga oleks mõistlik antud võlakiri osta?',
                        <br />,
                        'b) Mis hinnaga saaks antud võlakirja müüa',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="2"/>,
                        ' aasta pärast?'
                    ]}
                    answer={diskonto}
                />

                <FormCard
                    title={'Kupong müük'}
                    handleSubmit={(e) => setKupong(Kupong(e))}
                    text={[
                        'Milline on ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5"/>,
                        '  € kupongvõlakirja müügihind täna, kui realiseerimiseni jääb ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="2"/>,
                        ' aastat ? Iga-aastane kupongi makse on ',
                        <Form.Control type="text" style={{display: "inline", width: "7rem"}} placeholder="4"/>,
                        ' €. Inflatsiooni mõju ei arvesta. Võlakirja nõutav tulumäär e. teiste võlakirjade intressimäär on',
                        <Form.Control type="text" style={{display: "inline", width: "3rem"}} placeholder="2"/>,
                        ' %.'
                    ]}
                    answer={kupong}
                />

                <FormCard
                    title={'Diskonto2'}
                    handleSubmit={(e) => setDiskonto2(Diskonto2(e))}
                    text={[
                        'Investor ostis ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5"/>,
                        '  € eest ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="2"/>,
                        ' € nimiväärtusega diskontovõlakirja. Kui võlakiri ostetakse tagasi ',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="4"/>,
                        ' aasta pärast, siis kui suur oleks võlakirja intressimäär?',
                    ]}
                    answer={diskonto2}
                />

                <FormCard
                    title={'Diskonto3'}
                    handleSubmit={(e) => setDiskonto3(Diskonto3(e))}
                    text={[
                        'Investor ostis ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="5"/>,
                        '  € eest ',
                        <Form.Control type="text" style={{display: "inline", width: "10rem"}} placeholder="2"/>,
                        ' € nimiväärtusega diskontovõlakirja. Mitme aastase võlakirjaga oleks tegemist kui võlakirja intressimäär oleks',
                        <Form.Control type="text" style={{display: "inline", width: "4rem"}} placeholder="4"/>,
                        ' %?',
                    ]}
                    answer={diskonto3}
                />

            </div>
        </div>
    );
}

export default SecondPage;
