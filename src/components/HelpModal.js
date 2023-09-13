import React from "react";
import helpIcon from "../images/help_icon.png";

function HelpModal(props) {
  return (
    <>
      <div
        className="modal-backdrop fade in show"
        style={{ display: props.openHelpModal ? "block" : "none" }}
        onClick={props.handleCloseHelpModal}
      ></div>
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: props.openHelpModal ? "block" : "none" }}
        aria-modal="true"
        aria-label="Help dialog"
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
          bis_skin_checked={1}
        />
        <div
          role="document"
          focustrap="true"
          className="modal-dialog"
          bis_skin_checked={1}
        >
          <div className="modal-content" bis_skin_checked={1}>
            <div
              
              className="modal-header"
              bis_skin_checked={1}
            >
              <span  className="modal-icon">
                <img  src={helpIcon} alt="Help" />
              </span>
              <h2  className="modal-title pull-left">
                Help
              </h2>
              <button
                
                type="button"
                aria-label="Close"
                className="close pull-right close-box"
                onClick={props.handleCloseHelpModal}
              />
            </div>
            <div
              
              className="modal-body"
              bis_skin_checked={1}
            >
              <div
                
                className="modal-bodyTxt"
                bis_skin_checked={1}
              >
                <p>
                  For more information about paying your tuition through CIBC
                  International Student Pay please refer to our{" "}
                  <span style={{ color: "#bd0b4a", fontWeight: "bold" }}>
                    Frequently Asked Questions
                  </span>
                  &nbsp;to obtain helpful information.
                </p>
                <p>
                  For payment assistance, and to speak with a live
                  representative please contact our Support Desk: &nbsp;
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Calling from India (toll free):{" "}
                    <strong>+1 (800) 121-661661</strong>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Calling from North America (toll free):
                  </span>
                  <strong> +1 (844) 637-8898</strong>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Calling from anywhere else in the world:
                  </span>{" "}
                  <strong>+91 90713 73838</strong>
                </p>
                <p>&nbsp;</p>
                <p>
                  The CIBC International Student Pay team has the following
                  availability:
                </p>
                <ul>
                  <li>24 hours x 7 days a week&nbsp;</li>
                </ul>
                <p>
                  For the details of your payment please contact us via <br />
                  e-mail<strong>:</strong>{" "}
                  <a href="mailto:Studenthelp@cibc.com">Studenthelp@cibc.com</a>
                </p>
                <p>
                  <strong>
                    For any other questions regarding your payments, please
                    review information online{" "}
                    <a href="https://www.ulaval.ca/futurs-etudiants/planifiez-vos-etudes/cout-des-etudes-et-budget">
                      here
                    </a>
                  </strong>
                </p>
              </div>
            </div>
            <div
              
              className="modal-footer text-center"
              bis_skin_checked={1}
            >
              <button
                
                type="button"
                aria-label="Ok"
                className="btn btn-primary"
                onClick={props.handleCloseHelpModal}
              >
                OK
              </button>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
          bis_skin_checked={1}
        />
      </div>
    </>
  );
}

export default HelpModal;
