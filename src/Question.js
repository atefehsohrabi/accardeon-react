import React from 'react';
import { useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import data from './data';
const Question = ({title, info}) => {

    const[showInfo, setShowInfo] = useState(false);

    
    return (
        <div className='question'>
            <header>
                <h3>{title}</h3>
                <button onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <FaArrowCircleDown /> : <FaArrowCircleUp/>}
                    </button>
            </header>
            {
                showInfo && <p>{info}</p>
            }
        </div>
    );
};

export default Question;