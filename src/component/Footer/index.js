import {
  facebookIcon,
  githubIcon,
  instagramIcon,
  phoneIcon,
} from "../../assets";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h4>Contact me</h4>
        <ul className="contact-list">
          <li>
            <a
              href="tel:+6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/dknz._"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="contact-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Lapzy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="contact-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/share/14Lr4WYsCx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" className="contact-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
