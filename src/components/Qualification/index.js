const Qualification = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Quality
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Education &amp; Expericence
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-4">My Education</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">SMP</h5>
                <p className="mb-2">
                  <strong>SMP NEGERI 1 TATAPAAN</strong> |{" "}
                  <small>2016 - 2019</small>
                </p>
                <p>
                  Setelah menyelesaikan sekolah dasar, saya melanjutkan di
                  jenjang sekolah menengah pertama
                </p>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">SMA</h5>
                <p className="mb-2">
                  <strong>SMA KRISTEN MAKARIOS</strong> |{" "}
                  <small>2020 - 2022</small>
                </p>
                <p>
                  Saya melanjutkan bersekolah di SMA MAKARIOS yang berada di
                  Jakarta Barat
                </p>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Perguruan Tinggi</h5>
                <p className="mb-2">
                  <strong>Universitas Klabat</strong> |{" "}
                  <small>2022 - Sekarang</small>
                </p>
                <p>
                  Setelah menyelesaikan persekolahan saya melanjutkan di dunia
                  perkuliahan sebagai mahasiswa Teknik Informatika
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">My Expericence</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Web Designer</h5>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Front End</h5>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">programmer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
