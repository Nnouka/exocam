import React from 'react';
import { Link } from 'react-router-dom';
import { appName } from '../../../constants';
import { LINKS } from '../../../navigation/refs';
import './banner.css';
function ActionBanner(props) {
    return (
            <div className="action-banner">
                <h3 style={{color: '#fff'}}>Sign up to {appName} and get started on your first track now.</h3>
                <div>
                    <Link to={LINKS.SIGN_UP} className="btn btn-outline-primary">Sign Up for FREE</Link>
                </div>
            </div>
    );
}

export default ActionBanner;