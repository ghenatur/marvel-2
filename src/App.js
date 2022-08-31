import './App.css';
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import {Routes, Route} from "react-router-dom";
import Header from "./Component/Header/Header";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import { useState} from "react";


function App() {
    const[page,setPage]=useState('')
    const handleButton = (nrPage) => {
        setPage(nrPage)
    }

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home setNrPage={handleButton} />}/>
                <Route path={`/page${page+1}`} element={<Home  setNrPage={handleButton} />}/>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
