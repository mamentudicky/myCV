const Features = () => {
    return (
      <section className="features-tiles section">
        <div className="container">
          <div className="features-tiles-inner section-inner">
            <div className="tiles-wrap">
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                      features-tiles-item-image
                                                      mb-16
                                                  "
                    >
                      <img
                        src="images/feature-tile-icon-01.svg"
                        alt="Feature tile icon 01"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Kelahiran</h4>
                    <p className="m-0 text-sm">
                      Tahun 2004
                      Uuan Dumoga 
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={200}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                      features-tiles-item-image
                                                      mb-16
                                                  "
                    >
                      <img
                        src="images/feature-tile-icon-02.svg"
                        alt="Feature tile icon 02"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Riwayat Pendidikan</h4>
                    <p className="m-0 text-sm">
                      SD
                      SMP
                      SMA
                      sementara 1
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={400}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                      features-tiles-item-image
                                                      mb-16
                                                  "
                    >
                      <img
                        src="images/feature-tile-icon-03.svg"
                        alt="Feature tile icon 03"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Status</h4>
                    <p className="m-0 text-sm">
                      Punya enjie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;