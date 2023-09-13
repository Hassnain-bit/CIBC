import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function PayerDetails() {
  const navigate = useNavigate();
  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  //   STATES
  const [selectRelationship, setSelectRelationship] = useState("");
  const [payerFirstName, setPayerFirstName] = useState("");
  const [payerLastName, setPayerLastName] = useState("");
  const [payerEmailAddress, setPayerEmailAddress] = useState("");
  const [payerPhoneNumber, setPayerPhoneNumber] = useState("");
  const [payerAddress, setPayerAddress] = useState("");
  const [selected, setSelected] = useState("");
  const [city, setCity] = useState("");

  // ERRORS
  const [selectRelationshipError, setSelectRelationshipError] = useState(false);
  const [payerFirstNameError, setPayerFirstNameError] = useState(false);
  const [payerLastNameError, setPayerLastNameError] = useState(false);
  const [payerEmailAddressError, setPayerEmailAddressError] =
    useState(false);
  const [payerPhoneNumberError, setPayerPhoneNumberError] = useState(false);
  const [payerAddressError, setPayerAddressError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const handleNextClick = () => {
    let hasError = false;

    if (!selectRelationship) {
      setSelectRelationshipError(true);
      hasError = true;
    } else {
      setSelectRelationshipError(false);
    }

    if (!payerFirstName) {
      setPayerFirstNameError(true);
      hasError = true;
    } else {
      setPayerFirstNameError(false);
    }

    if (!payerLastName) {
      setPayerLastNameError(true);
      hasError = true;
    } else {
      setPayerLastNameError(false);
    }

    if (!payerEmailAddress) {
      setPayerEmailAddressError(true);
      hasError = true;
    } else {
      setPayerEmailAddressError(false);
    }

    if (!payerPhoneNumber) {
      setPayerPhoneNumberError(true);
      hasError = true;
    } else {
      setPayerPhoneNumberError(false);
    }

    if (!payerAddress) {
      setPayerAddressError(true);
      hasError = true;
    } else {
      setPayerAddressError(false);
    }

    if (!selected) {
      setCountryError(true);
      hasError = true;
    } else {
      setCountryError(false);
    }

    if (!city) {
      setCityError(true);
      hasError = true;
    } else {
      setCityError(false);
    }

    if (hasError) {
      return; // Exit early if there are errors
    }

    localStorage.setItem("selectRelationship", selectRelationship);
    localStorage.setItem("payerFirstName", payerFirstName);
    localStorage.setItem("payerLastName", payerLastName);
    localStorage.setItem("payerEmailAddress", payerEmailAddress);
    localStorage.setItem("payerPhoneNumber", payerPhoneNumber);
    localStorage.setItem("payerAddress", payerAddress);
    localStorage.setItem("selectedCountry", selected);
    localStorage.setItem("city", city);

    console.log("Relationship:", selectRelationship);
    console.log("Payer First Name:", payerFirstName);
    console.log("Payer Last Name:", payerLastName);
    console.log("Payer Email Address:", payerEmailAddress);
    console.log("Payer Phone Number:", payerPhoneNumber);
    console.log("Payer Address:", payerAddress);
    console.log("City:", city);

    alert("Thank you for submitting the details");
  };

  const handlePreviousClick = () => {
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
                Payer Details
              </div>
              <div className="col-sm-12 payment-details-container payment-information ng-star-inserted">
                <div className="col-md-12 col-sm-12 student-payer-details-container payer-detail-label-overflow">
                  {/* FIELD */}
                  <div
                    className="col-md-4 col-sm-6 col-12 payer-info-amt ng-star-inserted"
                    style={{ paddingLeft: "0" }}
                  >
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="relationShip"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Relationship to Student
                            </label>

                            {/* Student ID */}
                            <select
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control select ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="relationShip"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={selectRelationship}
                              onChange={(e) =>
                                setSelectRelationship(e.target.value)
                              }
                            >
                              <option hidden>Select Payer Relation</option>
                              <option>Parent</option>
                              <option>Grandparent</option>
                              <option>Brother/Sister</option>
                              <option>Himself</option>
                              <option>Other</option>
                            </select>

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                selectRelationshipError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please select Relationship to Student
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerfirstName"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Payer first name
                            </label>

                            {/*  Payer first name */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerfirstName"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={payerFirstName}
                              onChange={(e) =>
                                setPayerFirstName(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                payerFirstNameError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid name
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerLastName"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Payer last name
                            </label>

                            {/*  Payer last name */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerLastName"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={payerLastName}
                              onChange={(e) =>
                                setPayerLastName(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                payerLastNameError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid name
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerEmailAddress"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Payer Email Address
                            </label>

                            {/*   Payer Email Address */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerEmailAddress"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={payerEmailAddress}
                              onChange={(e) =>
                                setPayerEmailAddress(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                payerEmailAddressError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid email address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerAddress"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Payer Address
                            </label>

                            {/*  Payer Address */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerAddress"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={payerAddress}
                              onChange={(e) =>
                                setPayerAddress(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                payerAddressError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerAddress2"
                              htmlFor="payDetailsFeeAmount"
                              className="home_address_2"
                            >
                              Payer Address 2 (optional)
                            </label>

                            {/*  Payer Address 2 (optional) */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerAddress2"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerState"
                              htmlFor="payDetailsFeeAmount"
                            >
                              State/Province
                            </label>

                            {/*   State/Province */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerState"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="country"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Country
                            </label>

                            {/*  Country */}
                            <ReactFlagsSelect
                              id="selectCountry"
                              className="react-flag-select studentDetails"
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
                              Please select a valid country
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                   {/* FIELD */}
                   <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerCity"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              City
                            </label>

                            {/*  City */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerCity"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                cityError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerZipCode"
                              htmlFor="payDetailsFeeAmount"
                            >
                              Zip/Postal Code
                            </label>

                            {/*   Zip/Postal Code */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerZipCode"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="payerPhoneNumber"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Payer Cell/Phone Number
                            </label>

                            {/*   Payer Cell/Phone Number */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="payerPhoneNumber"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={payerPhoneNumber}
                              onChange={(e) =>
                                setPayerPhoneNumber(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                payerPhoneNumberError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid phone number
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
                        Disclaimer{" "}
                        <div className="arrow" bis_skin_checked={1} />
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
              </div>
              
            </form>

            <div className="component-btn-container" bis_skin_checked={1}>
              <button
                id="btnprevious"
                className="btn btn-secondary component-previous-button ng-star-inserted"
                aria-label="Previous"
                onClick={handlePreviousClick}
              >
                Previous
              </button>
              <button
                id="btnnext"
                className="btn btn-primary component-next-button"
                aria-label="Next"
                onClick={handleNextClick}
              >
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayerDetails;
