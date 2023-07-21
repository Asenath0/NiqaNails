import "./Landing.css";

function Landing() {
  return (
    <section className="landing">
      <div className="left">
        <h1>Zadbam o Twoje paznokcie z największą starannością!</h1>
        <a className="button" href="#about">
          Poznajmy się
        </a>
      </div>
      <div className="right">
        <div className="picture --main"></div>
        <div className="picture --secondary"></div>
      </div>
    </section>
  );
}

export default Landing;
