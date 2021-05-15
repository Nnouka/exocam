import React, {useEffect} from 'react';
import NavigationGraph from "./navigation/NavigationGraph";
import {connect} from "react-redux";
import {getUserPrivileges} from "./api/userAPI";
import {receivePrivileges} from "./features/actions/privileges";
import {getAllCategories} from "./api/categoryAPI";
import {receiveCategories} from "./features/actions/categories";
import {getAllProducts} from "./api/productAPI";
import {receiveProducts} from "./features/actions/products";

function App(props) {
    const {dispatch, activeRoute} = props;
    
    return (
        <>
            <NavigationGraph />
        </>
    );
}
function mapStateToProps({activeRoute}, props) {
    return {
        activeRoute,
        ...props
    }
}
export default connect(mapStateToProps)(App);
