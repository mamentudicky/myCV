const Header = () => {
  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src="assets/img/joss.jpg"
              alt
            />
          </div>
          <div className="col-lg-7 text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">
              Hello Guys I'm
            </h3>
            <h1
              className="display-3 text-uppercase text-primary mb-2"
              style={{ WebkitTextStroke: "2px #ffffff" }}
            >
              Joshua Busdan
            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
            <div className="typed-text d-none">
              Web Designer, Web Developer, Front End Developer, Apps Designer,
              Apps Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
