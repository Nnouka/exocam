import React from 'react';
import './app-bar.css';
import {Link} from 'react-router-dom';
function AppBar({renderIcon, links = [], ...props}) {
    return (
        <nav  className="app-bar-nav">
            <div className="nav-container">
                {
                    renderIcon && 
                    <ul>
                        <li>
                            {renderIcon()}
                        </li>
                        <li style={{color: '#fff'}}>
                            Exocam
                        </li>
                    </ul>
                }
                {
                    links.length > 0 &&
                    <ul>
                        {
                            links.map(
                                (l, index) => (<li key={'link' + index}>  {`${index > 0 ? '|':''}`} <Link to={l.to}>{l.name}</Link></li>)
                            )
                        }
                    </ul>
                }
            </div>
        </nav>
    );
}

export default AppBar;