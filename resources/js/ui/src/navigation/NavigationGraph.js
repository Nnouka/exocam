import React from 'react';
import {LINKS, REFS} from "./refs";
import FixedDrawer from "../layouts/drawer/FixedDrawer";
import Dashboard from "../views/Dashboard";
import {connect} from "react-redux";
import {mapPrivilegeToUrl} from "../utils/mapPrivilegeToUrl";
import {HashRouter, Switch, Route} from 'react-router-dom';
function NavigationGraph(props) {
    /* const {page, privileges} = props;
    const renderComponent = () => {
        switch (page.name) {
            case REFS.DASHBOARD:
                return (
                    <Dashboard />
                );
            case REFS.CATEGORIES:
                return (<CategoryModal isOpen={true} />);
            case REFS.CREATE_PRODUCT:
                return (<ProductModal isOpen={true} />);
            case REFS.PRODUCTS:
                return (<ProductAddModal products={page.params?.products}/>);
            case REFS.MAKE_SALE:
                return (<ProductSellModal products={page.params?.products} />);
            case REFS.SELL:
                return (<ProductCartFront />);
            case REFS.PRODUCT_SUMMARY:
                return (<ProductSummaryMore products={page.params?.products} name={page.params?.name}/> );
            default :
                return "Default";
        }
    }
    function mapPrivileges(){
        if (Array.isArray(privileges)) {
            return [ {url: 'product.sell'}, ...privileges].map(
                p => mapPrivilegeToUrl(p.url)
            )
        }
        return [];
    }  */
    return (
        <HashRouter>
            <Switch>
                <Route exact path={LINKS.DASHBOARD}>
                    <Dashboard />
                </Route>
                <Route exact path={LINKS.HOME}>
                    
                </Route>
            </Switch>
        </HashRouter>
    );
}
function mapStateToProps({activeRoute, privileges}, props) {
    return {
        page: activeRoute[activeRoute.length - 1],
        privileges,
        ...props
    }
}
export default connect(mapStateToProps)(NavigationGraph);
