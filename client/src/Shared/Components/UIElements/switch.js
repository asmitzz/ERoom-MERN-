import React, {useState} from 'react';

import './switch.css';

const Switch = () => {

    const [toggler,setToggler] = useState(false);

    const switchHandler = () => {
        if(!toggler){
            document.documentElement.style.setProperty('--primary-color', '#F2BC94');
            document.documentElement.style.setProperty('--secondary-color', '#30110D');
            document.documentElement.style.setProperty('--tertiary-color', '#1e1e1e');
            document.documentElement.style.setProperty('--hover', '#616161');
            document.documentElement.style.setProperty('--shadow-3', '#616161');
            document.documentElement.style.setProperty('--font-color', '#F0F7FF');
            document.documentElement.style.setProperty('--font-color-1', 'white');
            document.documentElement.style.setProperty('--font-color-4', '#30110D');
            document.documentElement.style.setProperty('--font-color-2', '#F0F7FF');
            document.documentElement.style.setProperty('--font-color-3', '#F0F7FF');
            document.documentElement.style.setProperty('--shadow-1', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--shadow-2', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--shadow-4', 'rgba(88,88,88, 0.425)');
        }
        else
        {
            document.documentElement.style.setProperty('--primary-color', '#F0F7FF');
            document.documentElement.style.setProperty('--secondary-color', '#7C3AED');
            document.documentElement.style.setProperty('--tertiary-color', '#8445f1');
            document.documentElement.style.setProperty('--hover', '#e0e0d6');
            document.documentElement.style.setProperty('--shadow-3', 'rgb(140, 127, 202)');
            document.documentElement.style.setProperty('--font-color', 'black');
            document.documentElement.style.setProperty('--font-color-1', '#F0F7FF');
            document.documentElement.style.setProperty('--font-color-2', '#343a40');
            document.documentElement.style.setProperty('--font-color-3', '#F0F7FF');
            document.documentElement.style.setProperty('--font-color-4', '#8445f1');
            document.documentElement.style.setProperty('--shadow-1', 'rgb(255, 255, 255,0.425)');
            document.documentElement.style.setProperty('--shadow-2', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--shadow-4', 'rgba(0, 0, 0, 0.5)');
        }
        setToggler(!toggler);
    }
    return (
         <label className="switch">
              <input type="checkbox" checked={toggler} onChange={switchHandler}/>
              <span className="slider round"></span>
         </label>
    );
};

export default Switch;
