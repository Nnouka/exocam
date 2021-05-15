import {wings} from "../lib/wings";
import {reportsUrl} from "./ApiUrls";

export const getTodaySales = () => wings.get(reportsUrl.CURRENT_SALES);
export const getTodayOpeningStock = () => wings.get(reportsUrl.TODAY_OPENING_STOCK);
export const getDaySummary = () => wings.get(reportsUrl.DAY_SUMMARY);
