import React, { useState } from "react";
import logo from "../images/CIBC_logo_footer.png";
import TosModal from "./TosModal";

function Footer() {
  // TOS MODAL
  const [openTosModal, setOpenTosModal] = useState(false);

  const handleOpenTosModal = () => {
    document.body.style.overflow = "hidden";
    setOpenTosModal(true);
  };

  const handleCloseTosModal = () => {
    document.body.style.overflow = "auto";
    setOpenTosModal(false);
  };
  return (
    <>
      <div>
        <div
          role="contentinfo"
          className="footer footer-new-main-container"
          bis_skin_checked={1}
        >
          <div className="container footer-new-content" bis_skin_checked={1}>
            <div className="row mrTop20" bis_skin_checked={1}>
              <div
                className="col-md-12 col-sm-12 col-xs-12 pdR0"
                bis_skin_checked={1}
              >
                <div
                  className="list-group ng-star-inserted"
                  bis_skin_checked={1}
                >
                  <div
                    className="list-group-item ng-star-inserted"
                    bis_skin_checked={1}
                  >
                    <div bis_skin_checked={1}>
                      <a
                        rel="noreferrer"
                        tabIndex={0}
                        id="newWindowMessage"
                        target="_blank"
                        aria-describedby="newWindowMessage"
                        className="noOutline ng-star-inserted"
                        href="https://www.cibc.com/en/privacy-security/privacy-policy.html"
                        aria-label="CIBC Privacy and Security"
                      >
                        CIBC Privacy and Security
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="list-group ng-star-inserted"
                  bis_skin_checked={1}
                >
                  <div
                    className="list-group-item ng-star-inserted"
                    bis_skin_checked={1}
                  >
                    <div bis_skin_checked={1}>
                      <a
                        tabIndex={0}
                        className="noOutline ng-star-inserted"
                        aria-label="Terms and Conditions"
                        href="#termsAndConditions"
                        onClick={handleOpenTosModal}
                      >
                        Terms and Conditions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row margin-bottom-30 logo-container"
              bis_skin_checked={1}
            >
              <div
                className="col-md-12 col-sm-12 col-xs-12 footer-logo-container"
                bis_skin_checked={1}
              >
                <div className="footer-new-logo-container" bis_skin_checked={1}>
                  <div className="footer-logo" bis_skin_checked={1}>
                    <div className="footer-new-logo" bis_skin_checked={1}>
                      <img
                        src={logo}
                        className="width-100 footer-new-logo-border"
                        alt="CIBC"
                      />
                    </div>
                  </div>
                  <div
                    className="footer-new-copyright canadian-imperial"
                    bis_skin_checked={1}
                  >
                    Canadian Imperial Bank of Commerce Website - Copyright ©
                    CIBC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TosModal
        openTosModal={openTosModal}
        handleCloseTosModal={handleCloseTosModal}
      />
    </>
  );
}

export default Footer;
