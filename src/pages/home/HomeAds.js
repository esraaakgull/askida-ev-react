import HomeAd from './HomeAd';

const HomeAds = () => {
  return (
    <section>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HomeAd />
            <HomeAd />
            <HomeAd />

            <HomeAd />
            <HomeAd />
            <HomeAd />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAds;
