import React from 'react';
import {connect} from 'react-redux';
import { setActiveRoute } from '../../features/actions/activeRoute';
function Link({to, params, style, className, ...props}) {
    const {dispatch} = props;
    const routeTo = () => dispatch(setActiveRoute({name: to, params}))
    return (
        <a style={{...style, cursor: 'pointer'}} className={className} onClick={routeTo}>{props.children}</a>
    );
}

export default connect()(Link);