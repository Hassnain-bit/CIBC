import React from "react";
import faqIcon from "../images/faq_icon.png";

function FaqModal(props) {
  return (
    <>
      <div
        className="modal-backdrop fade in show"
        style={{ display: props.openFaqModal ? "block" : "none" }}
        onClick={props.handleCloseFaqModal}
      ></div>
      <div
        role="dialog"
        tabIndex={-1}
        className="modal fade show"
        style={{ display: props.openFaqModal ? "block" : "none" }}
        aria-modal="true"
        aria-label="FAQs dialog"
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
            <div className="modal-header" bis_skin_checked={1}>
              <span className="modal-icon">
                <img src={faqIcon} alt="FAQs" />
              </span>
              <h2 className="modal-title pull-left">FAQs</h2>
              <button
                type="button"
                aria-label="Close"
                className="close pull-right close-box"
                onClick={props.handleCloseFaqModal}
              />
            </div>
            <div className="modal-body" bis_skin_checked={1}>
              <div className="modal-bodyTxt" bis_skin_checked={1}>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <h3>
                      <strong>International Student Payment Platform:</strong>
                    </h3>
                    <strong>
                      <span className="question_span">
                        Q. Why should I use Canadian Imperial Bank of Commerce
                        (CIBC)?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. CIBC is one of the largest financial institutions in
                      Canada with ‘state of the art’ electronic foreign exchange
                      platform. CIBC was also named the strongest publicly
                      traded bank in Canada – and the only North American bank
                      in Bloomberg’s ranking 5 years in a row (Bloomberg
                      Markets, 2015) For more information please log on to{" "}
                      <a
                        rel="noreferrer"
                        className="linkstyle"
                        href="https://www.cibc.com"
                        target="_blank"
                      >
                        CIBC Website
                      </a>
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Why should I use this payment platform?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Your Educational Institute has partnered with Canadian
                      Imperial Bank of Commerce (CIBC) to provide its students
                      preferred exchange rates. These preferred exchange rates
                      are applied to the student payments, and allows the
                      student to make the payments in his/her ‘Home
                      Currency/Preferred Currency’. Other benefits include:
                    </span>{" "}
                    <br />
                    <ul style={{ paddingLeft: "15px", margin: "auto" }}>
                      <li>
                        Bank wire quotes are valid for 72 hours (excluding
                        weekends and Canadian holidays) to give the student
                        peace of mind against any adverse currency price
                        fluctuations.
                      </li>
                      <li>
                        The platform allows the student to track their payments
                        and notifies when the payment is received.
                      </li>
                      <li>
                        The transaction flows through in a fully secure banking
                        environment.
                      </li>
                      <li>
                        Faster processing times and transfer to student account
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. How can I check the status of my transaction.{" "}
                      </span>{" "}
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Please log into the student portal and view the status
                      of your transaction there. Alternatively, please send an
                      email to{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        {" "}
                        studenthelp@cibc.com
                      </a>{" "}
                      if you have any further questions or require more clarity.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Why should I make a bank wire payment through CIBC
                        International Student Pay as opposed to another method
                        of payment?
                      </span>{" "}
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Making a payment using a traditional bank wire through
                      the CIBC portal will allow you to take advantage of
                      preferred exchange rates that CIBC provides to your
                      educational institute, in most cases resulting in cost
                      savings . The portal also allows you a locked in rate for
                      72 hours (excluding weekends and Canadian holidays),
                      giving you the convenience of exchange rates not changing
                      at time of payment . Please note that this option requires
                      you to complete your payment by taking the instruction
                      sheet provided by CIBC to your local bank to wire the
                      funds.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Why should make a payment with a credit/debit card
                        through CIBC International Student Pay as opposed to
                        another method of payment?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. The credit/debit card methods will typically be the
                      fastest method of payment. By paying with credit/debit
                      card you have the added convenience of completing your
                      entire payment online, without needing to visit a bank
                      branch in person. When completing a payment through the
                      International Student Pay platform using a credit/debit
                      card, the rate provided will be valid for 30 minutes and
                      after completing the transactions the funds will
                      automatically be debited from your account.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Can I pay in any other currency other than my home
                        currency?
                      </span>{" "}
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Yes. We recommend making payments in your home currency
                      due to the preferred foreign exchange rates CIBC offers,
                      but you will have the option to make payments in USD, CAD
                      (where applicable) or other major currencies.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      {" "}
                      <span className="question_span">
                        Q. Can I make a payment through an Agent?
                      </span>{" "}
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Yes. Please select the relationship of the payer as
                      “Agent” and ensure the instruction sheet is delivered to
                      the Agent to make the payment.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Why do I have to make a payment within 72 hours?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. The Foreign Exchange market is dynamic and prices are
                      changing continuously. To protect the students from this
                      volatility, CIBC is able to offer protection for a period
                      of 72 hours, not including weekends and Canadian holidays.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. What happens if I make a payment after 72 hours?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Any payment made after the 72 hour deadline may be
                      returned. The quote expires after the 72 hour window, and
                      we may not be able to process your payment after this
                      time. For any questions regarding the transaction please
                      feel free to contact CIBC at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        {" "}
                        studenthelp@cibc.com
                      </a>
                      .
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Why is my currency not available for bank wire
                        option?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. CIBC’s Foreign Exchange department trades around 30
                      different countries, however there are some currencies
                      that are not supported due to banking regulations,
                      sanctions or other reasons. To help students in such
                      cases, CIBC provides the option to make the payments in
                      USD, CAD (where applicable) or other major currencies.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      {" "}
                      <span className="question_span">
                        Q. Some information was missed by the local bank when
                        transferring the funds?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Please contact CIBC immediately at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        {" "}
                        studenthelp@cibc.com
                      </a>{" "}
                      and provide the information. Please ensure you have
                      mentioned the following information in your communication:
                    </span>{" "}
                    <br />
                    <ul style={{ paddingLeft: "15px", margin: "auto" }}>
                      <li>Student Name</li>
                      <li>Student ID</li>
                      <li>Transaction Reference Number</li>
                      <li>Date of Transaction</li>
                      <li>Amount</li>
                    </ul>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. Do I need to inform my Educational Institution of the
                        payment?
                      </span>{" "}
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. This is not necessary as CIBC informs the Educational
                      Institution of all payments received.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. I lost my instructions sheet, how can I get a copy of
                        it?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Please log onto the student portal, click on the
                      “Transaction History” page to send the instruction sheet
                      to the email address on file.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. How will I know when my funds are received?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. You will receive an email notification from CIBC
                      advising you that your funds have been received and
                      processed to the Educational Institution.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. My local bank is charging a fee to send money, is
                        that covered in your fees?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. No, the local bank charges are not covered under the
                      quote provided by CIBC. Please send the quoted amount in
                      full, and pay any additional fees directly to your local
                      bank.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <strong>
                      <span className="question_span">
                        Q. I made a mistake and need to correct information I
                        entered in the portal?
                      </span>
                    </strong>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Please contact CIBC immediately at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        {" "}
                        studenthelp@cibc.com
                      </a>
                      . Please ensure you have mentioned the following
                      information in your communication:
                    </span>{" "}
                    <br />
                    <ul style={{ paddingLeft: "15px", margin: "auto" }}>
                      <li>Student Name</li>
                      <li>Student ID</li>
                      <li>Transaction Reference Number</li>
                      <li>Date of Transaction</li>
                      <li>Amount</li>
                    </ul>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  &nbsp;
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <h4>
                      <strong>Direct Debit (if applicable):</strong>
                    </h4>
                    <span className="question_span">
                      Q. Who is able to use the Direct Debit option?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Direct Debit is available for students from the United
                      States paying from a US bank account who pre-authorize
                      CIBC to debit the fee amount from the bank account
                      specified.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. What are the benefits associated with the Direct Debit
                      option?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. The Direct Debit option in most cases is cheaper than
                      the traditional bank wire method. In addition the entire
                      payment process is completed online, and the payer does
                      not need to go to their branch to complete the payment.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. How long does it take for the fees to be deposited into
                      my educational institute's account?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. The average debit transaction will take 2 to 5 business
                      days to be deposited into the Education Institution’s bank
                      account.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. What additional information is needed to pay via Direct
                      Debit?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. You will need to provide the following:
                    </span>{" "}
                    <br />
                    <ul style={{ paddingLeft: "15px", margin: "auto" }}>
                      <li>Name of Bank/F.I</li>
                      <li>Bank Account Number</li>
                      <li>9 Digit A.B.A Routing Number</li>
                      <li>Bank/F.I Full Address</li>
                      <li>Type of account</li>
                    </ul>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. My transaction failed. What can I do now?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Once a transaction has failed, you are able to initiate
                      a new one through the ISP portal. Most transactions fail
                      as a result of incorrect banking information being
                      inputted, so we recommend verifying your account
                      information with your bank prior to submitting a
                      transaction.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. I can’t pay the full amount of my payment request
                      because of insufficient funds in my debit account.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. If there are not enough funds in your account to pay
                      the tuition, the transaction will fail. You may be charged
                      NSF charges by your local bank, which is not covered under
                      the quote provided by CIBC. If you wish to initiate a new
                      transaction, please do so through the ISP portal and
                      ensure that there are enough funds in your account.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. Can I pay through a Canadian bank account.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Unfortunately, direct debit payments from a Canadian
                      bank account are not possible.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <h5>
                      <strong>China Union Pay (if applicable):</strong>
                    </h5>
                    <span className="question_span">
                      Q. What are the benefits associated with China Union Pay?
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. China Union Pay gives Chinese students studying in
                      Canada the opportunity to pay in their home currency (CNY)
                      and utilize the competitive and preferred foreign exchange
                      rates applied through CIBC’s International Student Pay.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. How long does it take for the fees to be deposited into
                      my Educational Institution’s account?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. On average, China UnionPay transactions will be
                      processed within 3 business days, but some may require up
                      to 5 business days to be deposited into the Education
                      Institution’s bank account. If the transaction time
                      exceeds this, please contact us at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        studenthelp@cibc.com
                      </a>
                      .
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. Which UnionPay cards can be used?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. All UnionPay debit and credit cards issued in China can
                      be used.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. My transaction failed. What can I do now?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Please review your payment details and ensure the
                      information is correct. If your information is valid and
                      the payment continues to fail, please contact your local
                      bank to verify your card limit, or contact us at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        studenthelp@cibc.com
                      </a>
                      .{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. I can’t pay the full amount of my payment request
                      because of my China Union Pay card limit.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. We recommend you contact your Chinese bank for further
                      assistance. Alternatively, you may make multiple payments
                      through the International Student Pay platform to send the
                      total amount owed to the educational institution.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  &nbsp;
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <h5>
                      <strong>Visa/MasterCard (if applicable):</strong>
                    </h5>
                    <span className="question_span">
                      Q. What are the benefits associated with Visa/MasterCard?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. The Visa and MasterCard payment option allows students
                      to pay fees in their home currency when CIBC is unable to
                      accept bank wire transactions in that particular currency.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. Which cards do you accept?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. We accept both debit and credit cards issued by Visa
                      and MasterCard.
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. How long does it take for the fees to be deposited into
                      my Educational Institution’s account?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. On average, Visa and MasterCard transactions will be
                      processed within 2 business days, but some may require up
                      to 5 business days to be deposited into the Education
                      Institution’s bank account. If the transaction time
                      exceeds this, please contact us at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        studenthelp@cibc.com
                      </a>
                      .
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. I can’t pay the full amount of my payment request
                      because of my credit card limit.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. We recommend you contact your local bank for further
                      assistance. Alternatively, you may make multiple payments
                      through the International Student Pay platform to send the
                      total amount owed to the educational institution.{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="question_span">
                      Q. My transaction failed. What can I do now?{" "}
                    </span>
                  </div>
                </div>
                <div className="row" bis_skin_checked={1}>
                  <div className="col-md-12" bis_skin_checked={1}>
                    <span className="answer_span">
                      A. Transactions often fail as a result of incorrect
                      information being inputted. Please review your payment
                      details and ensure the information is correct. If your
                      information is valid and the payment continues to fail,
                      please contact your local bank to verify your card limit,
                      or contact us at{" "}
                      <a
                        className="linkstyle"
                        href="mailto:studenthelp@cibc.com"
                      >
                        studenthelp@cibc.com
                      </a>
                      .
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer text-center" bis_skin_checked={1}>
              <button
                type="button"
                aria-label="Ok"
                className="btn btn-primary"
                onClick={props.handleCloseFaqModal}
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

export default FaqModal;
