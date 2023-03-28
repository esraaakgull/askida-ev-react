const Contact = () => {
  return (
    <div className="min-vh-100 p-4 bg-yellow">
      <div className="container rounded contactForm">
        <div className="row ">
          <div className="col-md-6 p-3 ">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4709448583726!2d26.63504835099455!3d38.31492377956493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb905dc83c60ab%3A0x44ebb36b81795056!2sWeptile!5e0!3m2!1str!2str!4v1661769437063!5m2!1str!2str"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-md-6 p-3">
            <form
              className="text-center border-start border-2 border-dark p-5"
              action="src/pages/contact#!">
              <p className="h4 mb-4">Contact us</p>
              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
                placeholder="Name"
              />
              <input
                type="email"
                id="defaultContactFormEmail"
                className="form-control mb-4"
                placeholder="E-mail"
              />
              <div className="form-group">
                <textarea
                  className="form-control rounded-0 mb-4"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"></textarea>
              </div>
              <div className="row d-flex justify-content-center p-3">
                <button className="btn submitBtn btn-block" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
