import React from 'react';
import './app-bar.css';
import logo from '../../static/images/logo.svg';
import {Link} from 'react-router-dom';
import {LINKS} from '../../navigation/refs';
function AppBar(props) {
    return (
        <div>
            <ul>
                <li>
                    <img src={logo}/>
                </li>
            </ul>
            <ul>
                <li><Link to={LINKS.LOGIN}>Login</Link></li>
                <li><Link to={LINKS.SIGN_UP}>Sign Up</Link></li>
            </ul>
        </div>
    );
}

export default AppBar;