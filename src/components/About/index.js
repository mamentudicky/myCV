import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    const database = getDatabase();
    const imageRef = ref(database, "image/image1");

    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImageBase64(data || "");
    });
  }, []);

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
            {imageBase64 ? (
              <img
                className="img-fluid rounded w-100"
                src={`data:image/jpeg;base64,${imageBase64}`}
                alt="Joshua Busdan profile picture"
              />
            ) : (
              <div>Loading image...</div>
            )}
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">UI/UX Designer &amp; Web Developer</h3>
            <p>
              Saya adalah seorang Mahasiswa Teknik Informatika, saya senang
              dalam bidang Web Design, FrontEnd, dan Aplikasi Development. Saya
              adalah seorang yang pekerja keras, ramah, dan orang yang tepat
              waktu. Cita-cita saya adalah ingin menjadi seorang programmer.
            </p>
            <div className="row mb-3">
              <div className="col-sm-6 py-2">
                <h6>
                  Name: <span className="text-secondary">Dicky Mamentu</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Birthday:{" "}
                  <span className="text-secondary">10 maret 2004</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Status: <span className="text-secondary">Mahasiswa</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Experience: <span className="text-secondary">1 Year</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Phone: <span className="text-secondary">085254617988 bisa juga 081543330656</span>
                </h6>
              </div>
              <div className="col-sm-6 py-2">
                <h6>
                  Email:{" "}
                  <span className="text-secondary">
                    mamentudicky@gmail.com
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
            <a
              href="#contact"
              className="btn btn-outline-primary mr-4"
              role="button"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="btn btn-outline-primary"
              role="button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
