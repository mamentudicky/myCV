import React, { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: containerRef.current.offsetWidth, // Scroll horizontal sesuai lebar container
          behavior: "smooth",
        });

        // Jika scroll telah mencapai akhir, kembali ke awal
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 12000); // Jeda scroll 12 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <main className="site-content">
      <section className="hero section center-content">
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1 className="mt-0 mb-16">Dicky Mendellson Mamentu</h1>
              <div className="container-xs">
                <p className="mt-0 mb-32">
                  Software Developer | Web and Mobile Applications  
                </p>
              </div>
            </div>
            <div className="hero-figure image-container" ref={containerRef}>
              <img
                className="has-shadow"
                src="images/image01.jpg"
                alt="Dicky Mamentu"
              />
              <img
                className="has-shadow"
                src="images/image02.jpg"
                alt="Dicky Mamentu"
              />
              <img
                className="has-shadow"
                src="images/image03.jpg"
                alt="Dicky Mamentu"
              />
              
              <img
                className="has-shadow"
                src="images/image01.jpg"
                alt="Dicky Mamentu"
              />
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .image-container {
            display: flex;
            overflow-x: auto;
            gap: 10px;
            -ms-overflow-style: none;  /* Menghilangkan scrollbar di Internet Explorer dan Edge */
            scrollbar-width: none;     /* Menghilangkan scrollbar di Firefox */
          }

          .image-container::-webkit-scrollbar {
            display: none;            /* Menghilangkan scrollbar di Chrome, Safari, dan Opera */
          }
          
          .has-shadow {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            flex-shrink: 0;
            width: 345px; /* Tetap menjaga lebar gambar */
            height: 560px; /* Tetap menjaga tinggi gambar */
            object-fit: cover; /* Menjaga proporsi gambar */
          }
        `}
      </style>
    </main>
  );
};

export default Hero;
