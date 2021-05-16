import React from 'react';
import AppBar from '../../components/appbar/AppBar';
import './public-layout.css';
import {LINKS} from '../../navigation/refs';
import {getServerHome} from '../../persistence';
import FooterBanner from '../../views/_parts/footer-banner';
import { appName } from '../../constants';
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
            <footer className="public-layout-footer">
                <FooterBanner rows={[
                    {cells: [
                        {title: 'platform', links: [
                            {to: '/', name: 'How it works'},
                            {to: '/', name: 'The team'},
                            {to: '/', name: 'Security'},
                            {to: '/', name: 'Integration'},
                            ]},
                            {title: "Get Involved", links: [
                                {to: '/donnate', name: 'Donnate money'},
                                {to: '/mentor/register', name: 'Become a mentor'},
                                {to: 'https://github.com/Nnouka/exocam', name: 'Become a maintainer'},
                            ]},
                        {title: 'About', links: [
                                {to: '/', name: `About ${appName}`},
                                {to: '/', name: 'About Mungwin'},
                                {to: '/', name: 'The Mungwin Way'},
                                {to: '/', name: 'Partners'},
                            ]},
                            {title: "Get help", links: [
                                    {to: '/', name: 'FAQs'},
                                    {to: '/', name: 'Jobs'},
                                ]}
                        ]}
                ]} />
            </footer>
        </>
    );
}

export default PublicLayout;