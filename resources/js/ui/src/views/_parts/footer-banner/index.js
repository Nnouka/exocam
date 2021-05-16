import React from "react";
import './footer-banner.css';
import FooterRow from "../../../components/footer/footer-row";
import FooterCell from "../../../components/footer/footer-cell";
import CopyrightBlock from "../../../components/footer/copyright-block";

function FooterBanner({rows = []}) {
    return (
        <section id="footer-banner" className="footer-banner">
            {
                (rows.length > 0) &&
                <>
                    {
                      rows.map(
                          (r, index) =>
                              <FooterRow key={"footer-row-" + index}>
                                  {
                                      (r.cells && Array.isArray(r.cells) && r.cells.length > 0)  &&
                                          <>
                                              {
                                                  r.cells.map(
                                                      (c, cIndex) =>
                                                          <FooterCell
                                                              key={"footer-row-" + index + "-cell-" + cIndex}
                                                              title={c.title}  links={c.links} />
                                                  )
                                              }
                                          </>
                                  }
                              </FooterRow>
                      )
                    }
                    <CopyrightBlock />
                </>
            }
        </section>
    );
}
export default FooterBanner;