import React from 'react';

const ResultBtn = (props) => {
    return (
        <div>
    <button {...props} className='resultsBtn' onClick={props.onClick}>Show results</button>
            
        </div>
    );
};

export default ResultBtn;