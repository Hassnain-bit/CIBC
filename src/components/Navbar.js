import React, { useState } from "react";
import logo from "../images/cibc-logo.svg";
import universitéLogo from "../images/université-laval-logo.jpg";
import languageflag from "../images/languageflag.png";
import FaqModal from "./FaqModal";
import HelpModal from "./HelpModal";

function Navbar() {
  // FAQ MODAL
  const [openFaqModal, setOpenFaqModal] = useState(false);

  const handleOpenFaqModal = () => {
    document.body.style.overflow = "hidden";
    setOpenFaqModal(true);
  };

  const handleCloseFaqModal = () => {
    document.body.style.overflow = "auto";
    setOpenFaqModal(false);
  };

  // HELP MODAL
  const [openHelpModal, setOpenHelpModal] = useState(false);

  const handleOpenHelpModal = () => {
    document.body.style.overflow = "hidden";
    setOpenHelpModal(true);
  };

  const handleCloseHelpModal = () => {
    document.body.style.overflow = "auto";
    setOpenHelpModal(false);
  };

  return (
    <>
      <nav title="Header" className="navbar navbar-expand-md navbar-light">
        <div className="menu-container navbar-mobile" bis_skin_checked="1">
          {/* <button
            type="button"
            data-toggle="collapse"
            data-target=".navbarCollapse"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse navbarCollapse"
            bis_skin_checked="1"
          >
            <div className="navbar-nav" bis_skin_checked="1">
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Home"
                  href="#/StudentPay"
                >
                  <span role="link">Home</span>
                </a>
              </div>
              {/* <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Track Your Payment"
                  href="#/transactions"
                >
                  <span role="link">Track Your Payment</span>
                </a>
              </div> */}
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="FAQs"
                  href="#/StudentPay/faq"
                >
                  <span role="link">FAQs</span>
                </a>
              </div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
            </div>
            <div className="navbar-nav ml-auto spliter" bis_skin_checked="1">
              &nbsp;
            </div>
            <div
              className="navbar-nav ml-auto nav-language"
              bis_skin_checked="1"
            >
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Help"
                  href="#/StudentPay/help"
                >
                  <span role="link" className="nav-help">
                    Help
                  </span>
                </a>
              </div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              {/* <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Login"
                  href="#/login"
                >
                  <span role="link">Login</span>
                </a>
              </div> */}
              <div className="nav-item nav-link">
                <div className="lang-icon" bis_skin_checked="1">
                  <img src="assets/image/languageflag.png" alt="" />
                </div>
                <select
                  className="lang-text lang-select ng-untouched ng-pristine ng-valid"
                  aria-label="Language Dropdown Menu"
                >
                  {/* <option value="fr" className="ng-star-inserted">
                    Français
                  </option> */}
                  <option value="en" className="ng-star-inserted">
                    English
                  </option>
                  <option value="pt" className="ng-star-inserted">
                    Português
                  </option>
                  <option value="es" className="ng-star-inserted">
                    Español
                  </option>
                  <option value="ko" className="ng-star-inserted">
                    한국어
                  </option>
                  <option value="hi" className="ng-star-inserted">
                    हिन्दी
                  </option>
                  <option value="pa" className="ng-star-inserted">
                    ਪੰਜਾਬੀ
                  </option>
                  <option value="zh-Hans" className="ng-star-inserted">
                    简体中文
                  </option>
                  <option value="zh-Hant" className="ng-star-inserted">
                    中文繁體
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="shadow collapse navbar-collapse navbarCollapse"
            bis_skin_checked="1"
          ></div>
          <div
            data-toggle="collapse"
            data-target=".navbarCollapse"
            className="navbar-slider-close collapse navbar-collapse navbarCollapse"
            bis_skin_checked="1"
          >
            X
          </div>
        </div>
        <div className="main-container" bis_skin_checked="1">
          <div
            role="presentation"
            className="navbar-brand"
            bis_skin_checked="1"
          >
            <span ng-if="univ_code"></span>
            <div className="cibc-logo" bis_skin_checked="1">
              <img src={logo} alt="CIBC" />
            </div>
            <div
              className="main-logo pull-left university-logo"
              bis_skin_checked="1"
            >
              <img src={universitéLogo} alt="Université Laval logo" />
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-light navbar-bottom navbar-desktop">
        <div className="menu-container" bis_skin_checked="1">
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarCollapse"
            className="collapse navbar-collapse"
            bis_skin_checked="1"
          >
            <div className="navbar-nav mr-auto" bis_skin_checked="1">
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link nav-home active ng-star-inserted"
                  aria-label="Home"
                  href="#/StudentPay"
                >
                  <span>Home</span>
                </a>
              </div>
              {/* <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Track Your Payment"
                  href="#/transactions"
                >
                  <span>Track Your Payment</span>
                </a>
              </div> */}
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="FAQs"
                  onClick={handleOpenFaqModal}
                  href="#faq"
                >
                  <span>FAQs</span>
                </a>
              </div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
            </div>
            <div
              className="navbar-nav ml-auto nav-language"
              bis_skin_checked="1"
            >
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Help"
                  onClick={handleOpenHelpModal}
                  href="#help"
                >
                  <span className="nav-help">Help</span>
                </a>
              </div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              <div className="ng-star-inserted" bis_skin_checked="1"></div>
              {/* <div className="ng-star-inserted" bis_skin_checked="1">
                <a
                  className="nav-item nav-link active ng-star-inserted"
                  aria-label="Login"
                  href="#/login"
                >
                  <span role="link">Login</span>
                </a>
              </div> */}
              <div
                className="nav-item nav-link"
                style={{ pointerEvents: "none" }}
              >
                <div className="lang-icon" bis_skin_checked="1">
                  <img src={languageflag} alt="" />
                </div>
                <select
                  className="lang-text lang-select ng-untouched ng-pristine ng-valid"
                  aria-label="Language Dropdown Menu"
                >
                  {/* <option value="fr" className="ng-star-inserted">
                    Français
                  </option> */}
                  <option value="en" className="ng-star-inserted">
                    English
                  </option>
                  <option value="pt" className="ng-star-inserted">
                    Português
                  </option>
                  <option value="es" className="ng-star-inserted">
                    Español
                  </option>
                  <option value="ko" className="ng-star-inserted">
                    한국어
                  </option>
                  <option value="hi" className="ng-star-inserted">
                    हिन्दी
                  </option>
                  <option value="pa" className="ng-star-inserted">
                    ਪੰਜਾਬੀ
                  </option>
                  <option value="zh-Hans" className="ng-star-inserted">
                    简体中文
                  </option>
                  <option value="zh-Hant" className="ng-star-inserted">
                    中文繁體
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <FaqModal
        openFaqModal={openFaqModal}
        handleCloseFaqModal={handleCloseFaqModal}
      />
      <HelpModal
        openHelpModal={openHelpModal}
        handleCloseHelpModal={handleCloseHelpModal}
      />
    </>
  );
}

export default Navbar;
