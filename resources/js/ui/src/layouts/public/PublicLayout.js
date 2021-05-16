import React from 'react';
import AppBar from '../../components/appbar/AppBar';
import './public-layout.css';
import {LINKS} from '../../navigation/refs';
import {getServerHome} from '../../persistence';
function PublicLayout(props) {
    return (
        <>
            <AppBar 
                renderIcon={() => <img width="40px" src={`${getServerHome()}/images/logo-white.svg`}/>}
                links={[
                    {to: LINKS.LOGIN, name: 'Login'},
                    {to: LINKS.SIGN_UP, name: 'Sign Up'},
                ]}
            />
            <main className="public-layout-container">
                {props.children}
            </main>
        </>
    );
}

export default PublicLayout;