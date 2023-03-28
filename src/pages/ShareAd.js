import { useRef, useState } from 'react';
import noImage from '../assets/images/noImage.jpg';

const ShareAd = () => {
  const [imageUrl1, setImageUrl1] = useState(noImage);
  const [imageUrl2, setImageUrl2] = useState(noImage);
  const [imageUrl3, setImageUrl3] = useState(noImage);

  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    if (!event.target.files) return;
    setImageUrl1(URL.createObjectURL(event.target.files[0]));
    setImageUrl2(URL.createObjectURL(event.target.files[1]));
    setImageUrl3(URL.createObjectURL(event.target.files[2]));
  };

  return (
    <>
      <div className="bg-yellow p-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 bg-whitesmoke p-5 border border-2 rounded">
            <div className="col-md-4 border-2 border-bottom border-dark">
              <h4>İlan Ver</h4>
            </div>
            <form className="pt-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputCity">İl</label>
                    <select id="inputState" className="form-control">
                      <option selected>İzmir</option>
                      <option>İstanbul</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputState">İlçe</label>
                    <select id="inputState" className="form-control">
                      <option selected>Buca</option>
                      <option>Konak</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputState">Mahalle</label>
                    <select id="inputState" className="form-control">
                      <option selected>Menderes</option>
                      <option>Erdem</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputState">Isınma Türü</label>
                    <select id="inputState" className="form-control">
                      <option selected>Doğalgaz</option>
                      <option>Soba</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputState">Oda Sayısı</label>
                    <select id="inputState" className="form-control">
                      <option selected>3+1</option>
                      <option>2+1</option>
                      <option>1+1</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputBuilding">Bina Yaşı</label>
                    <input type="text" className="form-control" id="inputBuilding" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputBuildingSize">m2</label>
                    <input type="text" className="form-control" id="inutBuildingSize" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputExplanation">Açıklama</label>
                    <textarea
                      className="form-control"
                      id="inputExplanation"
                      placeholder="Açıklama"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row p-3 d-flex align-items-center">
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="files"
                      className="btn submitBtn"
                      onClick={() => hiddenFileInput.current.click}>
                      Fotoğraf yükle
                    </label>
                    <input
                      multiple
                      className="d-none"
                      id="files"
                      type="file"
                      onChange={handleChange}
                      ref={hiddenFileInput}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <img src={imageUrl1} alt="img" width={'100%'} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <img src={imageUrl2} alt="img" width={'100%'} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <img src={imageUrl3} alt="img" width={'100%'} />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row p-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 btn submitBtn btn-block mb-4">
                  <button type="submit" className="btn submitBtn">
                    Gönder
                  </button>
                </div>
                <div className="col-md-3"></div>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ShareAd;
