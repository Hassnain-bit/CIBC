import React from "react";
import tosIcon from "../images/Terms and Conditions.png";

function TosModal(props) {
  return (
    <>
      <div
        className="modal-backdrop fade in show"
        style={{ display: props.openTosModal ? "block" : "none" }}
        onClick={props.handleCloseTosModal}
      ></div>
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: props.openTosModal ? "block" : "none" }}
        aria-modal="true"
        aria-label="Terms and Conditions dialog"
      >
        <div
          tabIndex={0}
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
          bis_skin_checked={1}
        />
        <div
          role="document"
          focustrap
          className="modal-dialog"
          bis_skin_checked={1}
        >
          <div className="modal-content" bis_skin_checked={1}>
            <div className="modal-header" bis_skin_checked={1}>
              <span className="modal-icon">
                <img src={tosIcon} alt="Terms and Conditions" />
              </span>
              <h2 className="modal-title pull-left">Terms and Conditions</h2>
              <button
                type="button"
                aria-label="Close"
                className="close pull-right close-box"
                onClick={props.handleCloseTosModal}
              />
            </div>
            <div className="modal-body" bis_skin_checked={1}>
              <div
                className="tc-main-container font-terms-conditions"
                bis_skin_checked={1}
              >
                <div className="tc-container" bis_skin_checked={1}>
                  <h1>CIBC INTERNATIONAL STUDENT PAY</h1>
                  <p className="tc-text">
                    This page explains the terms and conditions (the{" "}
                    <strong>"Terms and Conditions"</strong>) on which Canadian
                    Imperial Bank of Commerce (<strong>"CIBC"</strong>) agrees
                    to offer you the user (<strong>"You"</strong> or{" "}
                    <strong>"Your"</strong>) access to the{" "}
                    <strong>CIBC International Student Pay platform</strong>{" "}
                    (the <strong>"Online Platform")</strong>. Please read these
                    Terms and Conditions carefully and print a copy for Your
                    records.
                  </p>
                  <p className="tc-text">
                    By selecting the checkbox indicating You agree to these
                    Terms and Conditions, You acknowledge and agree that You
                    have read and understood the Terms and Conditions and agree
                    to any applicable fees and charges.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      1. CIBC does{" "}
                      <span style={{ textDecoration: "underline" }}>not</span>{" "}
                      act as service provider to You
                    </span>
                  </h2>
                  <p className="tc-text">
                    CIBC provides payment and foreign exchange solutions to,
                    among others, colleges, universities, education providers
                    and other similar institutions in Canada (
                    <strong>"Educational Institution"</strong>), including
                    facilitating payments from You for the Educational
                    Institutions.{" "}
                    <span style={{ textDecoration: "underline" }}>
                      <strong>
                        In accepting payments for the Educational Institution,
                        CIBC is acting as a service provider to the Educational
                        Institution – and is not as a service provider to You.
                      </strong>
                    </span>{" "}
                    In the event You decide to send a payment to an account
                    owned and/or operated by CIBC for transmission to the
                    Educational Institution, You irrevocably agree that CIBC may
                    accept and act upon the sole instructions of the Educational
                    Institution with respect to such payment.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      2. If You wish to pay tuition in a currency other than
                      canadian dollars
                    </span>
                  </h2>
                  You may use the Online Platform to view a foreign exchange
                  rate on tuition payments destined to the Educational
                  Institution. The foreign exchange rate is provided by CIBC to
                  the Educational Institution. You are not required to use the
                  Online Platform to pay tuition fees to the Educational
                  Institution. You are at all times entitled to source canadian
                  dollars from alternate financial institutions, including Your
                  local financial institution.{" "}
                  <span style={{ textDecoration: "underline" }}>
                    CIBC derives income from the difference (the spread) between
                    the prices at which we buy and sell foreign currency. Our
                    spreads may differ from time and can change (without prior
                    notice). This spread is reflected in the Quote (defined
                    below) and in any applicable refunds. CIBC may offer
                    Educational Institutions monetary incentives in connection
                    with the solutions provided.
                  </span>
                  <p className="tc-text">&nbsp;</p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      3. If You wish to pay tuition in canadian dollars
                    </span>
                  </h2>
                  <p className="tc-text">
                    You may use the Online Platform to facilitate tuition
                    payments destined to the Educational Institution in canadian
                    dollars. You may be required to include additional fees in
                    Your payment, as disclosed in the Online Platform.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <p className="tc-text">
                    <span style={{ textDecoration: "underline" }}>
                      <strong>
                        4. If payment is received in any other currency than
                        what You selected as Your preferred currency on the
                        Online Platform, it may result in additional fees being
                        applied.
                      </strong>
                    </span>
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      5. How to make a tuition payment
                    </span>
                  </h2>
                  <p className="tc-text">
                    You will be required to follow the below process:
                  </p>
                  <ol className="tc-orderListAlpahbet">
                    <li>
                      The Online Platform will prompt You to enter the tuition
                      fee amount in canadian dollars, and You will select Your
                      preferred currency.
                    </li>
                    <li>
                      The Online Platform will display a quote (the "Quote") in
                      Your selected currency, which quote will remain valid for
                      72 hours for bank wires payments (excluding those hours
                      between 12:01 a.m. on a Saturday and 11:59 p.m. on a
                      Sunday in your local time and Canadian statutory holidays)
                      (the "Deadline") and will (in respect of non-Canadian
                      dollar payments) present the proposed exchange rate for
                      the relevant currency pair. During the 72 hour period for
                      bank wire payments (excluding those hours between 12:01
                      a.m. on a Saturday and 11:59 p.m. on a Sunday in your
                      local time and Canadian statutory holidays), you will not
                      be able to access the Online Platform to view further
                      Quotes. In the case of Canadian dollar payments, the Quote
                      will display the tuition fee amount in canadian dollars,
                      including any fee referenced above in section 3.
                    </li>
                    <li>
                      You will be required to provide the following information:
                      <div className="tc-listContainer" bis_skin_checked={1}>
                        <p className="tc-text">For non-Agent payer:</p>
                        <ol className="tc-orderList">
                          <li>
                            Student Information:
                            <ul className="tc-unorderList">
                              <li>Name</li>
                              <li>Student ID</li>
                              <li>Address</li>
                              <li>Contact details, including email address</li>
                              <li>Academic Term</li>
                              <li>Payment Amount</li>
                            </ul>
                          </li>
                          <li>
                            Payer information (if different from the student
                            information above):
                            <ul className="tc-unorderList">
                              <li>Name</li>
                              <li>Address</li>
                              <li>Contact details, including email address</li>
                              <li>Academic Term</li>
                              <li>Payment Amount</li>
                            </ul>
                          </li>
                          <li>
                            Payer local bank information:
                            <ul className="tc-unorderList">
                              <li>Account Number</li>
                              <li>Bank Name</li>
                              <li>Address</li>
                              <li>Contact details</li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                      <div className="tc-listContainer" bis_skin_checked={1}>
                        <p className="tc-text">For Agent payer:</p>
                        <ol className="tc-orderList">
                          <li>
                            Student Information:
                            <ul className="tc-unorderList">
                              <li>Name</li>
                              <li>Student ID</li>
                              <li>Address</li>
                              <li>Contact details, including email address</li>
                              <li>Academic Term</li>
                              <li>Payment Amount</li>
                            </ul>
                          </li>
                          <li>
                            Agent information (if available):
                            <ul className="tc-unorderList">
                              <li>Name</li>
                              <li>Contact details, including email address</li>
                            </ul>
                          </li>
                          <li>
                            Agent local bank information (if available):
                            <ul className="tc-unorderList">
                              <li>Account Number</li>
                              <li>Bank Name</li>
                              <li>Address</li>
                              <li>Contact details</li>
                            </ul>
                          </li>
                        </ol>
                        <p className="tc-text">
                          You are solely responsible for the accuracy and
                          completeness of Your information.{" "}
                          <span style={{ textDecoration: "underline" }}>
                            <strong>
                              You acknowledge and understand that Your failure
                              to provide CIBC with and maintain accurate
                              information may result in a delayed or returned
                              payment(s).
                            </strong>
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      For bank wire payments, the Online Platform will generate
                      wire instructions. You are required to print and take the
                      wire instructions to Your local bank as soon as possible
                      to initiate the wire transfer.
                    </li>
                    <li>
                      If you are making payment in a currency other than
                      canadian dollars, you must ensure that the wire transfer
                      is received by CIBC prior to the Deadline{" "}
                      <span style={{ textDecoration: "underline" }}>
                        <strong>or Your payment may be returned.</strong>
                      </span>{" "}
                      If You are unable to make the payment in time, Your
                      continued access to the Online Platform will be at CIBC's
                      discretion. You are therefore advised to make sure that
                      You will have time to go to your local bank as soon as
                      possible after obtaining a Quote from the Online Platform.
                    </li>
                  </ol>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">6. Returns and Refunds</span>
                  </h2>
                  <p className="tc-text">
                    If, for whatever reason, the tuition payment is returned to
                    You, CIBC (on behalf of the Educational Institution) will
                    reconvert the payment at the then-prevailing foreign
                    exchange rate for the relevant currency pair.
                    <span style={{ textDecoration: "underline" }}>
                      <strong>
                        {" "}
                        You shall be responsible for any resulting losses or
                        costs, including without limitation any foreign exchange
                        losses (due to fluctuations in foreign currency pricing)
                        and any intermediary bank charges or fees.
                      </strong>
                    </span>
                  </p>
                  <ol className="tc-orderListAlpahbet">
                    <li>
                      <span className="tc-bold">
                        <strong>Refunds</strong>
                      </span>
                      : CIBC does not have authority to reverse or refund
                      authorized transactions. You must contact the Educational
                      Institution directly for a refund or reversal.
                      <ol className="tc-orderList">
                        <li>
                          Upon the direction of the Educational Institution CIBC
                          shall refund the funds to the payment method source
                          from which such funds originated. If the account from
                          which the funds originated is closed or is
                          unavailable, for any reason, at the time of refund,
                          CIBC shall refund the funds to the Educational
                          Institution, and You must contact the Educational
                          Institution directly for a refund.
                        </li>
                        <li>
                          CIBC shall refund transactions in local currency
                          (where applicable) at the then-prevailing foreign
                          exchange rate for the relevant currency pair, which
                          will include any applicable spread.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <span className="tc-bold">
                        <strong>Returns</strong>:
                      </span>
                      CIBC may return a payment to You if so requested by the
                      Educational Institution or for one of the following
                      reasons:
                      <ol className="tc-orderList">
                        <li>
                          The wire transfer contains incorrect information or is
                          missing required information;
                        </li>
                        <li>
                          The amount received by CIBC is less than the expected
                          amount for whatever reason;
                        </li>
                        <li>
                          if the wire payment is not received by CIBC within 72
                          hours (excluding those hours between 12:01 a.m. on a
                          Saturday and 11:59 p.m. on a Sunday in Your local time
                          and Canadian statutory holidays) of CIBC displaying
                          the Quote via the Online Platform;
                        </li>
                        <li>
                          if so required by applicable (i) anti-money laundering
                          legislation and/or (ii) international sanctions,
                          including without limitation economic, financial or
                          trade sanctions (collectively, "AML Requirements"); or
                        </li>
                        <li>
                          if required by the relevant payment processors,
                          network or system in accordance with the agreements,
                          rules, regulations or requirements relating to the
                          particular payment method, including, for greater
                          certainty, if You or a third party disputes any
                          payments, or if a payment is charged back by the
                          applicable payment processor, network or provider for
                          any other reason.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p className="tc-text">
                    CIBC will have no liability for any costs or losses incurred
                    by You resulting from any action taken by CIBC in
                    furtherance of compliance with AML Requirements, or any
                    other applicable law, regulation, or policy, or from any
                    action taken by CIBC as otherwise allowed under these Terms
                    and Conditions.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">7. Intellectual Property</span>
                  </h2>
                  <p className="tc-text">
                    You acknowledge and agree that all copyright and other
                    intellectual property rights in and to the Online Platform
                    are and remain CIBC' exclusive property. You agree not to
                    permit use of the Online Platform by any third party. You
                    agree to not directly or indirectly, decompile, disassemble,
                    reverse engineer or otherwise attempt to derive or discern
                    the source code or internal workings of the Online Platform.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">8. Disclaimer</span>
                  </h2>
                  <p className="tc-text">
                    YOU UNDERSTAND AND AGREE THAT THE ONLINE PLATFORM IS
                    PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. CIBC MAKES
                    NO WARRANTY THAT THE ONLINE PLATFORM WILL MEET YOUR
                    REQUIREMENTS OR THAT USE OF THE ONLINE PLATFORM WILL BE
                    UNINTERRUPTED, TIMELY, SECURE OR ERROR FREE; NOR DOES CIBC
                    MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED
                    FROM USE OF THE ONLINE PLATFORM OR THE ACCURACY OR
                    RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE ONLINE
                    PLATFORM. CIBC DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
                    EXPRESS, IMPLIED OR STATUTORY REGARDING THE ONLINE PLATFORM,
                    INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS
                    FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, TITLE,
                    NON-INFRINGEMENT OF THIRD PARTY RIGHTS AND ACCURACY OF DATA.
                    CIBC IS NOT RESPONSIBLE FOR ANY LOSS OR DAMAGE TO A MOBILE
                    DEVICE RESULTING FROM YOUR ACCESS OR USE OR ATTEMPTED USE OF
                    THE ONLINE PLATFORM. CIBC MAY, WITHOUT NOTICE, SUSPEND ANY
                    PART OR ALL OF THE ONLINE PLATFORM IN ORDER TO REDUCE OR
                    PREVENT FRAUD, IF REQUIRED BY LAW, IN ORDER FOR EMERGENCY
                    MAINTENANCE OR REPAIRS TO BE CARRIED OUT, OR IF IT SO
                    CHOOSES.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      9. No Liability for Use of Site:
                    </span>
                  </h2>
                  <p className="tc-text">
                    CIBC will only be liable to You for direct damages that are
                    finally judicially determined to have resulted from our
                    gross negligence, fraud or willful misconduct. CIBC WILL NOT
                    BE LIABLE FOR ANY DAMAGES, LOSSES OR EXPENSES (INCLUDING
                    DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
                    PUNITIVE DAMAGES) ARISING FROM THE INABILITY TO USE THIS
                    SITE OR THE SITE INFORMATION, OR AN ERROR, OMISSION,
                    INTERRUPTION, DEFECT, DELAY, COMPUTER VIRUS, SYSTEM FAILURE,
                    LOSS OF DATA OR OTHERWISE, EVEN IF CIBC OR ITS
                    REPRESENTATIVES ARE ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES, LOSSES OF EXPENSES. These limitations apply to any
                    act or omission of us or our employees, officers, directors,
                    affiliates, agents or suppliers, including any negligent
                    acts or omissions of such persons, and to any losses
                    resulting from such act or omission, even if we were advised
                    of the possibility of damages, regardless of the form or the
                    basis of action, including a cause of action in contract,
                    tort (including negligence), statute or any other doctrine
                    of law.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">
                      10. Privacy and Data Confidentiality
                    </span>
                  </h2>
                  <p className="tc-text">
                    You consent to the collection, use and sharing of Your
                    personal information as described in CIBC's privacy policy
                    Your Privacy is Protected. This includes collecting
                    information about You from, and sharing it with, the
                    Educational Institution and other such parties as may
                    reasonably be required for the purposes of (i) providing You
                    access to and use of the CIBC International Student Pay
                    platform; (ii) allowing CIBC to provide payment and foreign
                    exchange solutions to Your Educational Institution,
                    including facilitating payments from and returns to You for
                    the Educational Institutions, to assist in addressing
                    services enquiries and disputes related to Your use of the
                    CIBC International Student Payment Solution, and providing
                    reports to the Educational Institution on such services;
                    (iii) identifying You; (iv) verifying information You give
                    CIBC; (v) protecting You and CIBC from errors and criminal
                    activity; and (vi) complying with legal and regulatory
                    obligations. CIBC may communicate with You for any of these
                    purposes by phone, fax, text, or other electronic means, and
                    automatic dialing-announcing device, at any numbers You have
                    provided CIBC, or Internet, mail, or any other methods.
                  </p>
                  <p className="tc-text">
                    CIBC's Your Privacy is Protected privacy policy is available
                    at any branch in Canada or{" "}
                    <a
                      rel="noreferrer"
                      className="linkstyle"
                      href="https://www.cibc.com"
                      target="_blank"
                    >
                      www.cibc.com
                    </a>
                    .This policy may be amended, replaced or supplemented from
                    time to time. The CIBC Group includes CIBC and its Canadian
                    affiliates that offer deposits, loans, mutual funds,
                    securities trading, portfolio management, investment
                    counseling, mortgages, credit cards, trust services,
                    insurance, and other products and services.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">11. Governing Law</span>
                  </h2>
                  <p className="tc-text">
                    These Terms and Conditions, this site and Your use of the
                    Online Platform will be governed by and construed in
                    accordance with the laws of the Province of Ontario and the
                    federal laws of Canada applicable therein, without regard to
                    the principles of conflicts of law. Any dispute or claim
                    arising out of or in connection with Your use of the Online
                    Platform will be subject to the exclusive jurisdiction of
                    the courts of Ontario, Canada.
                  </p>
                </div>
                <div className="tc-container" bis_skin_checked={1}>
                  <h2>
                    <span className="tc-bold">12. Compliance with Laws:</span>
                  </h2>
                  <p className="tc-text">
                    You agree to comply with all applicable federal, state,
                    provincial and local laws, regulations, ordinances and
                    codes.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center" bis_skin_checked={1}>
              <button
                type="button"
                aria-label="Ok"
                className="btn btn-primary"
                onClick={props.handleCloseTosModal}
              >
                <span>Close</span>
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

export default TosModal;
