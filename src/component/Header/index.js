import { ProfilePicture } from "../../assets";

const Header = () => {
  return (
    <header className="cv-header">
      <div className="header-content">
        <div className="header-text">
          <h1>Andika Pujianto</h1>
          <p>Pelajar/Mahasiswa</p>
        </div>
        <div className="profile-picture">
          <img src={ProfilePicture} alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
