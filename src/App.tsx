import React, {useState} from 'react';
import FirstPage from "./pages/firstPage";
import SecondPage from "./pages/secondPage";
import {Button} from "react-bootstrap";

const pages = {
    first: 1,
    second: 2
}

function App() {
    const [page, setPage] = useState(1);
    return (
        <div>
            <div style={{ "justifyContent": "center", "marginTop": "12px", "display": "flex", "gap": "24px"}}>
                <Button onClick={() => setPage(1)}>First page</Button>
                <Button onClick={() => setPage(2)}>Second page</Button>
            </div>
            {page === pages.first && <FirstPage/>}
            {page === pages.second && <SecondPage/>}
        </div>
    );
}

export default App;