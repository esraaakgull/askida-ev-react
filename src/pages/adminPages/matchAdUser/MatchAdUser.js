const MatchAdUser = () => {
  return (
    <div className="col">
      <div className="row p-3">
        <div className="col-md-5 p-0 me-5 border border-2 border-dark rounded">
          <div className="text-center bg-green p-2">
            <h4>Başvuru yapan üye bilgileri</h4>
          </div>
          <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ad</th>
                    <th scope="col">Soyad</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-0 me-5 border border-2 border-dark rounded">
          <div className="text-center bg-orange p-2">
            <h4>Başvuru yapılan ev</h4>
          </div>
          <div className="bd-example-snippet bd-code-snippet">
            <div className="bd-example">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Bina Yaşı</th>
                    <th scope="col">m2</th>
                    <th scope="col">İl</th>
                    <th scope="col">İlçe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 text-center">
          <button className="btn submitBtn btn-block mb-4">Evi üyeye sahiplendir</button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default MatchAdUser;
