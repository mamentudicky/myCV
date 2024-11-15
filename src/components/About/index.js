const About = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <img className="img-fluid rounded w-100" src="img/joss2.jpg" alt />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">UI/UX Designer &amp; Web Developer</h3>
            <p>
              Saya adalah seorang Mahasiswa Teknik Informatika, saya senang
              dalam bidang Web Design, FrontEnd, dan Aplikasi Development. saya
              adalah seorang yang pekerja keras, ramah, dan orang yang tepat
              waktu. Cita-cita saya adalah ingin menjadi seorang programmer
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Name: <span className="text-secondary">Joshua Busdan</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Birthday:{" "}
                  <span className="text-secondary">21 Januari 2005</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Status: <span className="text-secondary">Mahasiswa</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience: <span className="text-secondary">1 Years</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Phone: <span className="text-secondary">085157464670</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email:{" "}
                  <span className="text-secondary">
                    revildobusdan@gmail.com
                  </span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Address:{" "}
                  <span className="text-secondary">Manado, Sulawesi Utara</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Freelance: <span className="text-secondary">Available</span>
                </h6>
              </div>
            </div>
            <a href className="btn btn-outline-primary mr-4">
              Hire Me
            </a>
            <a href className="btn btn-outline-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
