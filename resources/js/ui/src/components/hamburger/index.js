import React, {useState} from "react";
import './hamburger.css';
function Hamburger({defaultOpen = false, onClick, permanent = false, className}) {
    const [open, setOpen] = useState(defaultOpen);
    const toggleOpen = (val) => {
        setOpen(val);
        onClick && onClick(val)
    }
    return (
        <div className={`hamburger-menu ${!permanent ? (open ? 'opened' : '') : ''} ${className}`} onClick={() => toggleOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;
