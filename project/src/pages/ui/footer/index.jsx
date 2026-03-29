import {
  contacts,
  mail,
  telegram,
  vk
} from "../../../app/images";

import "./index.css";

export const Footer = () => {

  return (
    <footer id="footer" className="footer">
      <ul className="social__list">
        <li className="social__elem"><a href="" className="social__link"><img src={telegram} alt="telegram" className="social__icon" /></a></li>
        <li className="social__elem"><a href="" className="social__link"><img src={vk} alt="vk" className="social__icon" /></a></li>
        <li className="social__elem"><a href="" className="social__link"><img src={mail} alt="mail" className="social__icon" /></a></li>
        <li className="social__elem"><a href="" className="social__link"><img src={contacts} alt="contacts" className="social__icon" /></a></li>
      </ul>
    </footer>
  );
};