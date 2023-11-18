import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <div className="title-1">AAAAAAAAAAAAA</div>
        <div className="title-2">bbb ccc ddd</div>
        <div className="title-3">
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
