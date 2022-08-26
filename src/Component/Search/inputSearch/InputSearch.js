import React from 'react';
import './InputSearch.css'

const InputSearch = ({clickSearch, inputValue, pressEnter}) => {

    return (
        <div className={"search"}>
            <input type="text"
                   placeholder={"Search hero ..."}
                   onInput={inputValue}
                   onKeyDown={pressEnter}
            />
            <button className={"btn"} onClick={clickSearch}>Enter</button>
        </div>
    )
};

export default InputSearch;