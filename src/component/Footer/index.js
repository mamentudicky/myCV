import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/title");

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <footer id="contact" className="footer">
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="footer-content">
          <h4>{footer.title}</h4>
          <ul className="contact-list">
            <li>
              <a
                href="tel:+6281543330656"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/jpeg;base64, ${footer.phone}`}
                  alt="Phone"
                  className="contact-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mamentudkyy_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/jpeg;base64, ${footer.instagram}`}
                  alt="Instagram"
                  className="contact-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mamentudicky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/jpeg;base64, ${footer.github}`}
                  alt="GitHub"
                  className="contact-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/qez4cPh9njEg1W6L/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`data:image/jpeg;base64, ${footer.facebook}`}
                  alt="Facebook"
                  className="contact-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
