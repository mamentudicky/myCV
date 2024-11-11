import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { ProfilePicture } from "../../assets";

const Header = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header className="cv-header">
      <div className="header-content">
        <div className="header-text">
          <h1>{header.title}</h1>
          <p>{header.subTitle}</p>
        </div>
        <div className="profile-picture">
          <img src={ProfilePicture} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
