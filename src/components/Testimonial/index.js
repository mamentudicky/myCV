const Testimonial = () => {
  return (
    <div className="container-fluid py-5" id="testimonial">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Review
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Clients Say
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="owl-carousel testimonial-carousel">
              <div className="text-center">
                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                <h4 className="font-weight-light mb-4">
                  Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita
                </h4>
                <img
                  className="img-fluid rounded-circle mx-auto mb-3"
                  src="assets/img/testimonial-1.jpg"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="font-weight-bold m-0">Client Name</h5>
                <span>Profession</span>
              </div>
              <div className="text-center">
                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                <h4 className="font-weight-light mb-4">
                  Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita
                </h4>
                <img
                  className="img-fluid rounded-circle mx-auto mb-3"
                  src="assets/img/testimonial-2.jpg"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="font-weight-bold m-0">Client Name</h5>
                <span>Profession</span>
              </div>
              <div className="text-center">
                <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                <h4 className="font-weight-light mb-4">
                  Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                  elitr dolore et eos labore, stet justo sed est sed. Diam sed
                  sed dolor stet accusam amet eirmod eos, labore diam clita
                </h4>
                <img
                  className="img-fluid rounded-circle mx-auto mb-3"
                  src="assets/img/testimonial-3.jpg"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="font-weight-bold m-0">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
