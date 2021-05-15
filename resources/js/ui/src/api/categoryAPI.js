import {wings} from "../lib/wings";
import {categoryUrls} from "./ApiUrls";

export const createCategory = (name) => wings.post(categoryUrls.CREATE, {name});
export const getAllCategories = () => wings.get(categoryUrls.ALL);
export const updateCategory = (id, name) => wings.post(categoryUrls.update(id), {name});
