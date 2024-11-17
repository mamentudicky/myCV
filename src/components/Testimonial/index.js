const Testimonial = () => {
  const testimonials = [
    { name: "Client 1", image: "img/testimonial-1.jpg", profession: "Developer" },
    { name: "Client 2", image: "img/testimonial-2.jpg", profession: "Designer" },
    { name: "Client 3", image: "img/testimonial-3.jpg", profession: "Manager" }
  ];

  return (
    <div className="container py-5" id="testimonial">
      <h1 className="text-center text-uppercase text-primary mb-5">Clients Say</h1>
      <div className="row justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-4 text-center mb-4">
            <i className="fa fa-3x fa-quote-left text-primary mb-3" />
            <img
              className="img-fluid rounded-circle mx-auto mb-3"
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
              style={{ width: 80, height: 80 }}
            />
            <h5 className="font-weight-bold">{testimonial.name}</h5>
            <span>{testimonial.profession}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
