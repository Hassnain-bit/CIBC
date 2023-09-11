import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function StudentDetails() {
  const navigate = useNavigate();
  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  //   STATES
  const [studentID, setStudentID] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentEmailAddress, setStudentEmailAddress] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
  const [studentHomeAddress, setStudentHomeAddress] = useState("");
  const [selected, setSelected] = useState("");
  const [city, setCity] = useState("");

  // ERRORS
  const [studentIDError, setStudentIDError] = useState(false);
  const [studentFirstNameError, setStudentFirstNameError] = useState(false);
  const [studentLastNameError, setStudentLastNameError] = useState(false);
  const [studentEmailAddressError, setStudentEmailAddressError] =
    useState(false);
  const [studentPhoneNumberError, setStudentPhoneNumberError] = useState(false);
  const [studentHomeAddressError, setStudentHomeAddressError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const handleNextClick = () => {
    let hasError = false;

  if (!studentID) {
    setStudentIDError("Student ID is required");
    hasError = true;
  } else if (studentID !== "537031173") {
    setStudentIDError("Please enter a valid Student ID");
    hasError = true;
  } else {
    setStudentIDError(false);
  }

  if (!studentFirstName) {
    setStudentFirstNameError(true);
    hasError = true;
  } else {
    setStudentFirstNameError(false);
  }

  if (!studentLastName) {
    setStudentLastNameError(true);
    hasError = true;
  } else {
    setStudentLastNameError(false);
  }

  if (!studentEmailAddress) {
    setStudentEmailAddressError(true);
    hasError = true;
  } else {
    setStudentEmailAddressError(false);
  }

  if (!studentPhoneNumber) {
    setStudentPhoneNumberError(true);
    hasError = true;
  } else {
    setStudentPhoneNumberError(false);
  }

  if (!studentHomeAddress) {
    setStudentHomeAddressError(true);
    hasError = true;
  } else {
    setStudentHomeAddressError(false);
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

    localStorage.setItem("studentID", studentID);
    localStorage.setItem("studentFirstName", studentFirstName);
    localStorage.setItem("studentLastName", studentLastName);
    localStorage.setItem("studentEmailAddress", studentEmailAddress);
    localStorage.setItem("studentPhoneNumber", studentPhoneNumber);
    localStorage.setItem("studentHomeAddress", studentHomeAddress);
    localStorage.setItem("selectedCountry", selected);
    localStorage.setItem("city", city);

    console.log("Student ID:", studentID);
    console.log("Student First Name:", studentFirstName);
    console.log("Student Last Name:", studentLastName);
    console.log("Student Email Address:", studentEmailAddress);
    console.log("Student Phone Number:", studentPhoneNumber);
    console.log("Student Home Address:", studentHomeAddress);
    console.log("City:", city);


    navigate("/payerDetails");
  };

  const handlePreviousClick = () => {
    navigate("/");
  }

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
                Student Details
              </div>
              <div className="col-sm-12 payment-details-container payment-information ng-star-inserted">
                <div className="col-md-12 col-sm-12 student-payer-details-container payer-detail-label-overflow">
                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="studentID"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student ID
                            </label>

                            {/* Student ID */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentID"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentID}
                              onChange={(e) => setStudentID(e.target.value)}
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentIDError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              {studentIDError}
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
                              id="studentfirstName"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student first name
                            </label>

                            {/*  Student first name */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentfirstName"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentFirstName}
                              onChange={(e) =>
                                setStudentFirstName(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentFirstNameError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid first name
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
                              id="studentLastName"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student last name
                            </label>

                            {/*  Student last name */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentLastName"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentLastName}
                              onChange={(e) =>
                                setStudentLastName(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentLastNameError
                                  ? "mat-error invalid-feedback active ng-star-inserted"
                                  : "mat-error invalid-feedback ng-star-inserted"
                              }
                              aria-live="polite"
                              id="mat-error-0"
                            >
                              Please enter a valid last name
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
                              id="studentEmailAddress"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student Email Address
                            </label>

                            {/*   Student Email Address */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentEmailAddress"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentEmailAddress}
                              onChange={(e) =>
                                setStudentEmailAddress(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentEmailAddressError
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
                              id="studentPhoneNumber"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student Cell/Phone Number
                            </label>

                            {/*   Student Cell/Phone Number */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentPhoneNumber"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentPhoneNumber}
                              onChange={(e) =>
                                setStudentPhoneNumber(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentPhoneNumberError
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

                  {/* FIELD */}
                  <div className="col-12 col-md-4 col-sm-6 form-group incPad">
                    <div className="mat-form-field">
                      <div className="mat-form-field-wrapper ng-tns-c64-2">
                        <div className="mat-form-field-flex ng-tns-c64-2">
                          <div className="mat-form-field-infix ng-tns-c64-2">
                            <label
                              id="studentHomeAddress"
                              htmlFor="payDetailsFeeAmount"
                              className="mandatory ng-star-inserted"
                            >
                              Student Home Address
                            </label>

                            {/*  Student Home Address */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentHomeAddress"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                              value={studentHomeAddress}
                              onChange={(e) =>
                                setStudentHomeAddress(e.target.value)
                              }
                            />

                            {/* ERROR */}
                            <div
                              aria-atomic="true"
                              className={
                                studentHomeAddressError
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
                              id="studentHomeAddress2"
                              htmlFor="payDetailsFeeAmount"
                              className="home_address_2"
                            >
                              Student Home Address 2 (optional)
                            </label>

                            {/*  Student Home Address 2 (optional) */}
                            <input
                              matinput=""
                              formcontrolname="agentOtherName"
                              className="mat-input-element mat-form-field-autofill-control form-control ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched"
                              aria-label="Agent/Recruiter Name required"
                              id="studentHomeAddress2"
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
                              id="studentState"
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
                              id="studentState"
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
                              id="studentCity"
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
                              id="studentCity"
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
                              id="studentZipCode"
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
                              id="studentZipCode"
                              aria-invalid="true"
                              aria-required="false"
                              aria-describedby="mat-error-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 payment-details-container">
                <div className="payment-details-elements">
                  <div
                    role="complementary"
                    className="disclaimer-div studentDetails"
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
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
