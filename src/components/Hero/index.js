import React from "react";

const Hero = () => {
  return (
    <main className="site-content">
      <section className="hero section center-content">
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1 className="mt-0 mb-16">Dicky Mamentu</h1>
              <div className="container-xs">
                <p className="mt-0 mb-32">
                  Software Developer | Web and Mobile Applications
                </p>
              </div>
            </div>
            <div className="hero-figure">
              <img
                className="has-shadow"
                src="images/hero-image.png"
                alt="Dicky Mamentu"
                width={896}
                height={504}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
