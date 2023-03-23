import mission from '../../assets/images/mission.png';
import news from '../../assets/images/news.png';
import vision from '../../assets/images/vission.png';

const MissionVision = () => {
  return (
    <section className="bg-yellow">
      <div className="container px-4 py-5 bg-yellow " id="hanging-icons">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="row d-flex text-center">
            <div>
              <img src={mission} className="homeIcon" alt="Mission" />
            </div>
            <div>
              <h3 className="fs-2 color-orange">Misyonumuz</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                another sentence and probably just keep going until we run out of words.
              </p>
            </div>
          </div>
          <div className="row d-flex text-center">
            <div>
              <img src={vision} className="homeIcon" alt="Vission" />
            </div>
            <div>
              <h3 className="fs-2 color-orange">Vizyonumuz</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                another sentence and probably just keep going until we run out of words.
              </p>
            </div>
          </div>
          <div className="row d-flex text-center">
            <div>
              <img src={news} className="homeIcon" alt="News" />
            </div>
            <div>
              <h3 className="fs-2 color-orange">Basında Biz</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                another sentence and probably just keep going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
