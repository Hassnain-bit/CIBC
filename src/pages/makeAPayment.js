import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function MakeAPayment() {
  const navigate = useNavigate();

  //   STATES
  const [openAgentField, setOpenAgentField] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectTutionFee, setSelectTutionFee] = useState(false);
  const [selectAdmissionFee, setSelectAdmissionFee] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  const [isAgentSelected, setIsAgentSelected] = useState(false);

  const [agentNameError, setAgentNameError] = useState(false);
  const [tutionFeeError, setTutionFeeError] = useState(false);
  const [admissionFeeError, setAdmissionFeeError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  // STATES FOR FEE
  const [tuition, setTuition] = useState("");
  const [admission, setAdmission] = useState("");
  const [totalFee, setTotalFee] = useState("");

  // HANDLES FOR FEE
  const handleTuitionChange = (e) => {
    const newTuition = parseInt(e.target.value, 10);
    setTuition(newTuition);
    setTotalFee(newTuition + admission);
  };

  const handleAdmissionChange = (e) => {
    const newAdmission = parseInt(e.target.value, 10);
    setAdmission(newAdmission);

    // Reset admission fee error when input is changed
    setAdmissionFeeError(false);

    setTotalFee(tuition + newAdmission);
  };

  const handleYesRadioChange = () => {
    setIsAgentSelected(true);
    setOpenAgentField(true);
  };

  const handleNoRadioChange = () => {
    setIsAgentSelected(false);
    setOpenAgentField(false);
  };

  const handleNextClick = () => {
    let hasError = false;

    const agentName = document.getElementById("agentName").value;

    if (isAgentSelected && !agentName) {
      setAgentNameError(true);
      hasError = true;
    } else {
      setAgentNameError(false);
    }

    if (!tuition) {
      setTutionFeeError(true);
      hasError = true;
    } else {
      setTutionFeeError(false);
    }

    if (selectAdmissionFee && !admission) {
      setAdmissionFeeError(true);
      hasError = true;
    } else {
      setAdmissionFeeError(false);
    }

    // if (!totalFee) {
    //   // alert("Total Fee is required");
    //   return;
    // }

    if (!selected) {
      setCountryError(true);
      hasError = true;
    } else {
      setCountryError(false);
    }

    if (hasError) {
      return; // Exit early if there are errors
    }

    localStorage.setItem("agentName", agentName);
    localStorage.setItem("totalFee", totalFee);
    localStorage.setItem("selectedCountry", selected);

    console.log("Agent Name:", agentName);
    console.log("Total Fee:", totalFee);
    console.log("Selected Country:", selected);

    // Proceed to the next step or perform any other action here
    // Redirect to "/studentDetails" page
    navigate("/studentDetails");
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="outer-container">
        <Steps />

        <div className="main-container payment-background row">
          <div className="col-sm-12 col-md-12 make-payment-container">
            <form className="payment-container">
              <div
                role="heading"
                aria-level="1"
                className="payment-title"
                bis_skin_checked="1"
              >
                Make a Payment
              </div>
              <div className="col-sm-12 payment-details-container payment-information ng-star-inserted">
                <div
                  role="heading"
                  aria-level="2"
                  className="payment-sub-title ng-star-inserted"
                  bis_skin_checked="1"
                >
                  Agent/Recruiter Details
                </div>

                <div
                  className="payment-details-elements ng-star-inserted"
                  bis_skin_checked="1"
                >
                  {/* RADIO FORM */}
                  <div
                    role="radiogroup"
                    className="form-group col-md-8 col-sm-8 col-xs-12 ng-untouched ng-pristine ng-invalid"
                    bis_skin_checked="1"
                  >
                    <label
                      htmlFor="payDetailscountryList"
                      className="mandatory agent-label"
                    >
                      Are you working with an Agent/Recruiter?
                    </label>
                    <input
                      type="radio"
                      id="agentYes"
                      formcontrolname="isAgent"
                      name="isAgent"
                      value="true"
                      className="blue-radio ng-untouched ng-pristine ng-invalid"
                      aria-label="Are you working with an Agent/Recruiter? required Yes"
                      onChange={handleYesRadioChange}
                    />
                    <label htmlFor="agentYes" className="blue-radio-label">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="agentNo"
                      formcontrolname="isAgent"
                      name="isAgent"
                      value="false"
                      className="blue-radio ng-untouched ng-pristine ng-invalid"
                      aria-label="Are you working with an Agent/Recruiter? required No"
                      onChange={handleNoRadioChange}
                    />
                    <label
                      htmlFor="agentNo"
                      value="false"
                      className="blue-radio-label"
                    >
                      No
                    </label>
                  </div>

                  <div
                    className="form-group col-md-6 col-sm-6 col-xs-12 agent-others ng-star-inserted"
                    bis_skin_checked="1"
                    style={{ display: openAgentField ? "block" : "none" }}
                  >
                    {/* FORM FIELD */}
                    <div className="mat-form-field demo-full-width ng-tns-c65-5 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-hide-placeholder ng-invalid ng-dirty ng-star-inserted ng-touched mat-form-field-invalid">
                      <div
                        className="mat-form-field-wrapper ng-tns-c65-5"
                        bis_skin_checked="1"
                      >
                        <div
                          className="mat-form-field-flex ng-tns-c65-5"
                          bis_skin_checked="1"
                        >
                          <div
                            className="mat-form-field-infix ng-tns-c65-5"
                            bis_skin_checked="1"
                          >
                            <div className="ng-tns-c65-5" bis_skin_checked="1">
                              {/* LABEL */}
                              <label htmlFor="agentName" className="mandatory">
                                Agent/Recruiter Name
                              </label>

                              {/* AGENT NAME */}
                              <input
                                matinput=""
                                formcontrolname="agentOtherName"
                                className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                aria-label="Agent/Recruiter Name required"
                                id="agentName"
                                aria-invalid="true"
                                aria-required="false"
                                aria-describedby="mat-error-0"
                              />

                              {/* ERROR */}
                              <div
                                aria-atomic="true"
                                className={
                                  agentNameError
                                    ? "mat-error invalid-feedback active ng-star-inserted"
                                    : "mat-error invalid-feedback ng-star-inserted"
                                }
                                aria-live="polite"
                                id="mat-error-0"
                              >
                                Agent/Recruiter name is required
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  role="heading"
                  aria-level="2"
                  className="payment-sub-title ng-star-inserted"
                  bis_skin_checked="1"
                >
                  Payment Type Breakdown
                </div>

                <div className="col-sm-12 payment-info-fields payment-to-container ng-star-inserted">
                  <div className="dynamic-form payment-box-lineheight ng-pristine ng-invalid ng-touched">
                    <div className="col-md-12 col-sm-12 student-payer-details-container">
                      {/* CHECKBOX */}
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group incPad white-space-label ng-pristine ng-invalid ng-touched">
                        <div>
                          {/* MAT CHECKBOX */}
                          <div className="mat-checkbox mat-accent ng-untouched ng-pristine ng-valid">
                            <div className="mat-checkbox-layout">
                              <label className="containerCheckbox">
                                Tuition Fee
                                <input
                                  type="checkbox"
                                  checked={selectTutionFee}
                                  onChange={() =>
                                    setSelectTutionFee(!selectTutionFee)
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* INPUT */}
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group incPad">
                        {/* MAT FORM FIELD */}
                        <div className="mat-form-field demo-full-width ng-tns-c64-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-hide-placeholder ng-star-inserted ng-dirty ng-touched ng-valid">
                          <div className="mat-form-field-wrapper ng-tns-c64-3">
                            <div className="mat-form-field-flex ng-tns-c64-3">
                              <div className="mat-form-field-infix ng-tns-c64-3">
                                <div className="ng-tns-c64-3 checkBoxInput">
                                  {/* LABEL */}
                                  <label
                                    htmlFor="tuition_fee"
                                    className={
                                      selectTutionFee
                                        ? "ng-star-inserted mandatory"
                                        : "ng-star-inserted"
                                    }
                                  ></label>
                                  <div className="curreny-input-wrapper">
                                    <span className="currency-symbol">$</span>
                                    <span className="currency-code ng-star-inserted">
                                      {" "}
                                      CAD{" "}
                                    </span>

                                    {/* INPUT */}
                                    <input
                                      className={
                                        selectTutionFee
                                          ? "mat-input-element mat-form-field-autofill-control form-control input-currency active ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                          : "mat-input-element mat-form-field-autofill-control form-control input-currency ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                      }
                                      aria-label="Agent/Recruiter Name required"
                                      id="mat-input-3"
                                      aria-invalid="true"
                                      aria-required="false"
                                      aria-describedby="mat-error-0"
                                      type="number"
                                      value={tuition}
                                      onChange={handleTuitionChange}
                                    />
                                  </div>

                                  {/* ERROR */}
                                  <div
                                    aria-atomic="true"
                                    className={
                                      tutionFeeError
                                        ? "mat-error invalid-feedback active ng-star-inserted"
                                        : "mat-error invalid-feedback ng-star-inserted"
                                    }
                                    aria-live="polite"
                                    id="mat-error-0"
                                  >
                                    Please enter a valid fee amount
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CHECKBOX */}
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group incPad white-space-label ng-pristine ng-invalid ng-touched">
                        <div>
                          {/* MAT CHECKBOX */}
                          <div className="mat-checkbox mat-accent ng-untouched ng-pristine ng-valid">
                            <div className="mat-checkbox-layout">
                              <label className="containerCheckbox">
                                Admission Fee
                                <input
                                  type="checkbox"
                                  checked={selectAdmissionFee}
                                  onChange={() =>
                                    setSelectAdmissionFee(!selectAdmissionFee)
                                  }
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* INPUT */}
                      <div className="col-md-6 col-sm-6 col-xs-12 form-group incPad">
                        {/* MAT FORM FIELD */}
                        <div className="mat-form-field demo-full-width ng-tns-c64-3 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-hide-placeholder ng-star-inserted ng-dirty ng-touched ng-valid">
                          <div className="mat-form-field-wrapper ng-tns-c64-3">
                            <div className="mat-form-field-flex ng-tns-c64-3">
                              <div className="mat-form-field-infix ng-tns-c64-3">
                                <div className="ng-tns-c64-3 checkBoxInput">
                                  {/* LABEL */}
                                  <label
                                    htmlFor="admission_fee"
                                    className={
                                      selectAdmissionFee
                                        ? "ng-star-inserted mandatory"
                                        : "ng-star-inserted"
                                    }
                                  ></label>
                                  <div className="curreny-input-wrapper">
                                    <span className="currency-symbol">$</span>
                                    <span className="currency-code ng-star-inserted">
                                      {" "}
                                      CAD{" "}
                                    </span>

                                    {/* INPUT*/}
                                    <input
                                      className={
                                        selectAdmissionFee
                                          ? "mat-input-element mat-form-field-autofill-control form-control input-currency active ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                          : "mat-input-element mat-form-field-autofill-control form-control input-currency ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                      }
                                      aria-label="Agent/Recruiter Name required"
                                      id="mat-input-3"
                                      aria-invalid="true"
                                      aria-required="false"
                                      aria-describedby="mat-error-0"
                                      type="number"
                                      value={admission}
                                      onChange={handleAdmissionChange}
                                    />
                                  </div>

                                  {/* ERROR */}
                                  <div
                                    aria-atomic="true"
                                    className={
                                      admissionFeeError
                                        ? "mat-error invalid-feedback active ng-star-inserted"
                                        : "mat-error invalid-feedback ng-star-inserted"
                                    }
                                    aria-live="polite"
                                    id="mat-error-0"
                                  >
                                    Please enter a valid fee amount
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  role="heading"
                  aria-level="2"
                  className="payment-sub-title"
                  bis_skin_checked="1"
                >
                  Payment Details
                </div>

                <div className="payment-details-elements payment-details-components">
                  {/* SELECT COUNTRY */}
                  <div className="form-group col-md-6 col-sm-12 col-12 select-country">
                    <label htmlFor="payDetailsFeeAmount" className="mandatory">
                      Country/Region
                    </label>

                    {/* FIELD */}
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-0">
                        <div className="mat-form-field-flex ng-tns-c64-0">
                          <div className="mat-form-field-infix ng-tns-c64-0">
                            {/* SELECT COUNTRY */}
                            <ReactFlagsSelect
                              id="selectCountry"
                              className="react-flag-select"
                              selected={selected}
                              onSelect={(code) => setSelected(code)}
                              searchable={true}
                            />
                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                countryError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please select country where you are making the
                              payment from
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group col-md-6 col-sm-12 col-12 fee-amount">
                    {/* FIELD */}
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="totalFeeLabel"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                              aria-label="$, CAD"
                            >
                              Total Fee/Invoice Amount (CAD)
                            </label>

                            <div className="curreny-input-wrapper">
                              <span className="currency-symbol">$</span>
                              <span className="currency-code ng-star-inserted">
                                {" "}
                                CAD{" "}
                              </span>

                              {/* TOTAL FEE */}
                              <input
                                className="mat-input-element mat-form-field-autofill-control form-control input-currency ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                                aria-label="Agent/Recruiter Name required"
                                id="totalFee"
                                aria-invalid="true"
                                aria-required="false"
                                aria-describedby="mat-error-0"
                                value={totalFee}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  role="complementary"
                  className="disclaimer-div"
                  bis_skin_checked={1}
                >
                  <div className="container" bis_skin_checked={1}>
                    <div
                      data-target="#disclaimerOne"
                      data-toggle="collapse"
                      role="button"
                      tabIndex={0}
                      aria-label="Disclaimer"
                      aria-expanded="true"
                      className={
                        openDisclaimer
                          ? "disclaimer collapse.show collapsed"
                          : "disclaimer collapse.show"
                      }
                      bis_skin_checked={1}
                      onClick={() => setOpenDisclaimer(!openDisclaimer)}
                    >
                      Disclaimer <div className="arrow" bis_skin_checked={1} />
                    </div>
                    <div
                      id="disclaimerOne"
                      aria-expanded="true"
                      className={
                        openDisclaimer
                          ? "disclaimer-body"
                          : "disclaimer-body active"
                      }
                      bis_skin_checked={1}
                    >
                      <div tabIndex={0} className="card" bis_skin_checked={1}>
                        {" "}
                        Please contact{" "}
                        <a
                          href="mailto:Studenthelp@cibc.com"
                          aria-label="Studenthelp@cibc.com"
                          className="help-link"
                        >
                          studenthelp@cibc.com{" "}
                        </a>{" "}
                        for any questions you may have. International Student
                        Pay is made available as a service in association with
                        Université Laval. Usage of International Student Pay
                        does not represent any contractual obligations between
                        the students using this service and CIBC. All matters
                        related to payments must be redirected to Université
                        Laval
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="component-btn-container" bis_skin_checked={1}>
              <button
                id="btnnext"
                className="btn btn-primary component-next-button"
                aria-label="Next"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeAPayment;
