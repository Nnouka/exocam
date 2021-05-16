import React from 'react';
import './banner.css';
import { appName, codeGist } from '../../../constants';
import { Link } from 'react-router-dom';
import { LINKS, REFS } from '../../../navigation/refs';
import {getServerHome} from '../../../persistence';
function Banner(props) {
    return (
        <div  className="banner">
            <div>
                <img src={`${getServerHome()}/images/developer.svg`} className="banner-img" alt="developer" />
            </div>
            <div>
                <h2 className="banner-title">{appName}</h2>
                <h3 className="code-gist">{codeGist}</h3>
                <p>
                    Level up your programming and computer skills with many exercises across several languages, frameworks and utilities, and insightful discussions
                     with our dedicated team of welcoming mentors.  {appName} is 100% free forever. <span style={{color: '#88d'}}>But you can buy us cold water by your kind <Link to={LINKS.DONATE}>donnations</Link></span>💝.
                </p>
                <div style={{marginTop: 50}}>
                    <Link to={LINKS.SIGN_UP} className="btn btn-primary mr-5">Sign Up</Link>
                    <Link to={LINKS.EXPLORE_LANGUAGES} className="btn btn-outline-primary">Explore Languages</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;