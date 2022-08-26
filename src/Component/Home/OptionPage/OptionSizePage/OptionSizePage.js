import React from 'react';

const OptionSizePage = ({onChange}) => {

    const handleOption = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="form-option">
            <label htmlFor="form-select">Cards on a page: </label>
            <select className="form-select" onChange={handleOption}>
                <option key={25} value="25">25</option>
                <option key={50} value="50">50</option>
                <option key={75} value="75">75</option>
                <option key={100} value="100">100</option>
            </select>
        </div>
    );
};

export default OptionSizePage;
