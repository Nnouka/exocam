// export const BASE_URL = 'https://payngwinapi.herokuapp.com';
// export const BASE_URL = 'http://localhost:8000/api';
import {getServerHome} from "../persistence";

export const BASE_URL = getServerHome() + "/api";

export const categoryUrls = {
    CREATE: '/category/create',
    ALL: '/categories',
    update: (id) => `/category/${id}/update`
}

export const reportsUrl = {
    CURRENT_SALES: '/reports/sales',
    TODAY_OPENING_STOCK: '/report/stock/opening',
    TODAY_CURRENT_STOCK: '/report/stock/current',
    DAY_SUMMARY: '/report/day/summary',
}
export const userUrls = {
    PRIVILEGES: '/user/privileges'
}
export const productUrls = {
    ALL: '/products',
    CREATE: '/product/create',
    update: (id) => `/product/${id}/update`,
    ADD: '/product/add',
    SELL: '/products/sell'
}
