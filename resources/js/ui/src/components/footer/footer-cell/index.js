import React from "react";
import './footer-cell.css';
import {Link} from "react-router-dom";

function FooterCell({title, links = []}) {
    return (
        <div className="footer-cell">
            {
                title ? <h3 className="footer-cell-title">{title}</h3> : <h3 className="footer-cell-no-title"> </h3>
            }
            <div className="footer-cell-inner">
                {
                    (Array.isArray(links) && links.length > 0) &&
                    <ul>
                        {
                            links.map(
                                (l, index) => {
                                    if(l.to && l.to.length > 0) {
                                        return (<li key={"link-" + index}><Link to={l.to}>{l.name}</Link></li>);
                                    }
                                    return (<li key={"link-" + index}>{l.name}</li>)
                                }
                            )
                        }
                    </ul>
                }
            </div>
        </div>
    );
}

export default FooterCell;