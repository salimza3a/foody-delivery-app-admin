import GbFlagIcon from "../../images/icons/flag/gb.svg";
import FrFlagIcon from "../../images/icons/flag/fr.svg";
import AzeFlagIcon from "../../images/icons/flag/aze.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import i18next from "i18next";
import "./dropdown.css";
function Dropdowns() {
  return (
    <>
      <div className="dropdown m-3">
        <button
          className="btn dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {<img src={GlobeIcon} alt="" />}
        </button>
        <ul className="dropdown-menu ">
          <li>
            <button
              className="dropdown-item globeBtn"
              onClick={() => {
                i18next.changeLanguage("en");
              }}
            >
              {<img src={GbFlagIcon} alt="" />}
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                i18next.changeLanguage("fr");
              }}
            >
              {<img src={FrFlagIcon} alt="" />}
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                i18next.changeLanguage("aze");
              }}
            >
              {<img src={AzeFlagIcon} alt="" />}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdowns;
