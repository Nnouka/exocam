import React from 'react';
import AppBar from '../../components/appbar/AppBar';

function PublicLayout(props) {
    return (
        <>
            <AppBar />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default PublicLayout;