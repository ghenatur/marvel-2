import './App.css';
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import {Routes, Route} from "react-router-dom";
import Header from "./Component/Header/Header";
import basicHeroes from "./Component/Home/Functions/basicHeroes";
import {apiKey2, urlMarvel} from "./Component/keys/keys";
import Page from "./Component/Page/Page";
import React, { useState} from "react";
import placementOnPages from "./Component/Home/Functions/placementOnPages";

function App() {
    let [heroes, setHeroes] = useState([])
    const [option, setOption] = useState(25)

    function clickHome() {
        basicHeroes(urlMarvel, apiKey2, 100).then(response => setHeroes(heroes = response.results))
    }

    const handleOption = (option) => {
        setOption(option)
    }

    const placePage = placementOnPages(option, heroes)

    return (
        <div className="App">
            <Header clickHome={clickHome}/>
            <Routes>
                <Route>
                    <>
                        <Route path={'/'} element={<Home onChange={handleOption} placePage={placePage}/>}/>
                        {placePage && placePage.map((page, index) =>
                            <Route path={`page${index + 1}`}
                                   element={<Page index={index} key={index} heroesPages={page}/>}/>
                        )}
                    </>
                </Route>
                <Route path={'/search'} element={<Search heroes={heroes}/>}/>
            </Routes>
        </div>
    );
}

export default App;
