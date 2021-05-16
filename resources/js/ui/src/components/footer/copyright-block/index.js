import React from "react";
import './copyright-block.css';
import {getServerHome} from '../../../persistence';
function CopyrightBlock() {
    return (
        <div className="copyright-block">
            {`© MUNGWIN ${new Date().getFullYear()}`}
            <img style={{position: 'absolute', right: 10}} src={`${getServerHome()}/images/logo-gray.svg`} alt="logo" width="30"/>
        </div>
    );
}

export default CopyrightBlock;