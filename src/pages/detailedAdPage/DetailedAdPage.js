import home from '../../assets/images/home.jpg';
import Icon from '../../components/Icon';

const DetailedAdPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-3">
          <img src={home} alt="home" className="w-100" />
          <div className="row pt-3 pb-3">
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="col">
            <h1>İlan başlık</h1>
          </div>
          <div className="col pb-3 d-flex align-items-center ">
            <Icon name="fa-location-dot" className="pe-2" size="22px" />
            <span className="color-green">İzmir</span>
            <span> / </span>
            <span className="color-orange">Buca</span>
            <span> / </span>
            <span>Menderes mah.</span>
          </div>
          <div className="col pb-3">
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-fire pe-2 " size="22px" /> <b className="pe-2">Yakacak türü: </b>
              <span> Doğalgaz</span>
            </div>
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-building pe-2" size="22px" /> <b className="pe-2">Bina yaşı: </b>
              <span> Doğalgaz</span>
            </div>
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-maximize pe-2" size="22px" /> <b className="pe-2">m2: </b>
              <span> 100</span>
            </div>
          </div>
          <div className="col pb-3">
            <div className="row d-flex justify-content-center p-3">
              <button className="btn btn-block applyingButton" type="submit">
                İlana Başvur
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4709448583726!2d26.63504835099455!3d38.31492377956493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb905dc83c60ab%3A0x44ebb36b81795056!2sWeptile!5e0!3m2!1str!2str!4v1661769437063!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <hr />
      <div className="row pb-3">
        <div>
          <h3 className="color-orange">
            <u>İlan Bilgileri</u>
          </h3>
        </div>
        <div className="col pt-3 pb-3">
          <span>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedAdPage;
