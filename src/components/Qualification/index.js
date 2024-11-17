const Qualification = () => {
  return (
    <div id="qualification" className="container py-5" style={{ direction: "ltr", textAlign: "left" }}>
      <h1 className="text-center text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>
        Quality
      </h1>
      <h2 className="text-center text-primary">Education &amp; Experience</h2>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="mb-4">My Education</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>SMP</h5>
              <p><strong>SMP Advent Timika</strong> | 2016 - 2019</p>
              <p>Saya melanjutkan ke SMP setelah menyelesaikan sekolah dasar.</p>
            </li>
            <li className="mb-4">
              <h5>SMA</h5>
              <p><strong>SMA Advent Timika</strong> | 2020 - 2022</p>
              <p>Saya melanjutkan sekolah di Papua Barat.</p>
            </li>
            <li className="mb-4">
              <h5>Perguruan Tinggi</h5>
              <p><strong>Universitas Klabat</strong> | 2022 - Sekarang</p>
              <p>Saya melanjutkan kuliah di Teknik Informatika.</p>
            </li>
          </ul>
        </div>

        <div className="col-lg-6">
          <h3 className="mb-4">My Experience</h3>
          <ul className="list-unstyled">
            <li className="mb-4">
              <h5>Web Designer</h5>
            </li>
            <li className="mb-4">
              <h5>Front End Developer</h5>
            </li>
            <li className="mb-4">
              <h5>Programmer</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
