import {wings} from "../lib/wings";
import {productUrls} from "./ApiUrls";

export const getAllProducts = () => wings.get(productUrls.ALL);
export const createProduct = (product) => wings.post(productUrls.CREATE, product);
export const updateProductClass = (id, product) => wings.post(productUrls.update(id), product);
export const addProduct = (invoice) => wings.post(productUrls.ADD, invoice);
export const sellProducts = (invoice) => wings.post(productUrls.SELL, invoice);
