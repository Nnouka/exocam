import {wings} from "../lib/wings";
import {userUrls} from "./ApiUrls";

export const getUserPrivileges = () => wings.get(userUrls.PRIVILEGES);
