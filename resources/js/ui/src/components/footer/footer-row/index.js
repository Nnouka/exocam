import React from "react";
import './footer-row.css';

function FooterRow({children}) {
 return (
     <div className="footer-row">
         {children}
     </div>
 );
}
export default FooterRow;