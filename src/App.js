import './App.css';
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import {Routes, Route} from "react-router-dom";
import Header from "./Component/Header/Header";

function App() {


    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={`/page${1}`} element={<Home/>}/>
                <Route path={`/page${2}`} element={<Home />}/>
                <Route path={`/page${3}`} element={<Home />}/>
                <Route path={`/page${4}`} element={<Home />}/>
                <Route path={`/page${5}`} element={<Home />}/>
                <Route path={`/page${6}`} element={<Home />}/>
                <Route path={`/page${7}`} element={<Home />}/>
                <Route path={`/page${8}`} element={<Home />}/>
                <Route path={`/page${9}`} element={<Home />}/>
                <Route path={`/page${10}`} element={<Home />}/>
                <Route path={'/search'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
