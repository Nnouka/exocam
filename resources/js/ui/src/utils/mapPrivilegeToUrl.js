import {REFS} from "../navigation/refs";
import React from "react";
import {FaList, FaShoppingCart, FaUserSecret} from 'react-icons/fa';
import {GiNewBorn} from 'react-icons/gi';
import {AiOutlineShop} from 'react-icons/ai';
import {MdDashboard} from 'react-icons/md';
import {HiDocumentReport} from 'react-icons/hi';
const size = 30;
export function mapPrivilegeToUrl(name) {
    switch (name) {
        case "category.create":
            return {screen: REFS.CATEGORIES, name: 'Categories', renderIcon: () => <FaList size={size}/>};
        case "product.create":
            return {screen: REFS.CREATE_PRODUCT, name: 'New Product', renderIcon: () => <GiNewBorn size={size} />} ;
        case "product.index":
            return {screen: REFS.PRODUCTS, name: 'Add Stock', renderIcon: () => <AiOutlineShop size={size}/> };
        case "product.sell":
            return {screen: REFS.SELL, name: 'Sell', renderIcon: () => <FaShoppingCart size={size}/>};
        case "reports.index":
            return {screen: REFS.REPORTS, name: 'Reports', renderIcon: () => <HiDocumentReport size={size}/>};
        case "users.index":
            return {screen: REFS.USERS, name: 'Users', renderIcon: () => <FaUserSecret size={size}/>};
        default:
            return {screen: REFS.DASHBOARD, name: 'Dashboard', renderIcon: () => <MdDashboard size={size}/>} ;
    }

}
