import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Steps() {
  const [activeStudentDetails, setActiveStudentDetails] = useState(false);
  const [activePayerDetails, setActivePayerDetails] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/studentDetails") {
      setActiveStudentDetails(true);
    } else if (location.pathname === "/payerDetails") {
      setActiveStudentDetails(true);
      setActivePayerDetails(true);
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className="col-md-12 col-sm-12 col-xs-12 steps-element"
        bis_skin_checked="1"
      >
        <div className="inside-steps-element" bis_skin_checked="1">
          <span>
            <div className="make_payment steps-element-1" bis_skin_checked="1">
              <div
                className="display-inline-block oval-copy stepper-active"
                bis_skin_checked="1"
              >
                <div
                  className="oval-copy-3 d-flex justify-content-center align-items-center"
                  bis_skin_checked="1"
                >
                  <span className="step-indicators">1</span>
                </div>
                <label className="label make_payment">Make a Payment</label>
              </div>
              <div
                className={
                  activeStudentDetails
                    ? "steps-step-line-active steps-step-line-filled"
                    : "steps-step-line-active"
                }
                bis_skin_checked="1"
              >
                <div
                  className={
                    activeStudentDetails
                      ? "rectangle-copy oval-copy"
                      : "rectangle-copy"
                  }
                  bis_skin_checked="1"
                ></div>
              </div>
            </div>
          </span>
          <span>
            <div className="steps-element-1 stu_details" bis_skin_checked="1">
              <div
                className={
                  activeStudentDetails
                    ? "display-inline-block oval-copy stepper-active"
                    : "display-inline-block"
                }
                bis_skin_checked="1"
              >
                <div
                  className="oval-copy-3 d-flex justify-content-center align-items-center"
                  bis_skin_checked="1"
                >
                  <span className="step-indicators">2</span>
                </div>
                <label className="label stu_details">Student Details</label>
              </div>
              <div
                className={
                  activePayerDetails
                    ? "steps-step-line-active steps-step-line-filled"
                    : "steps-step-line-active"
                }
                bis_skin_checked="1"
              >
                <div
                  className={
                    activePayerDetails
                      ? "rectangle-copy oval-copy"
                      : "rectangle-copy"
                  }
                  bis_skin_checked="1"
                ></div>
              </div>
            </div>
          </span>
          <span>
            <div className="payer_details steps-element-1" bis_skin_checked="1">
              <div className={
                  activePayerDetails
                    ? "display-inline-block oval-copy stepper-active"
                    : "display-inline-block"
                } bis_skin_checked="1">
                <div
                  className="oval-copy-3 d-flex justify-content-center align-items-center"
                  bis_skin_checked="1"
                >
                  <span className="step-indicators">3</span>
                </div>
                <label className="label payer_details">Payer Details</label>
              </div>
              <div className="steps-step-line-active" bis_skin_checked="1">
                <div className="rectangle-copy" bis_skin_checked="1"></div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Steps;
