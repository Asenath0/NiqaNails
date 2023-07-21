import "./About.css";
import Me from "../../assets/me.png";

function About() {
  return (
    <section id="about">
      <div className="image-wrapper">
        <img src={Me} alt="moje zdjęcie" />
      </div>
      <div className="right">
        <h2>Cześć! Jestem Weronika.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum ipsum magna, luctus rutrum felis fringilla ac. Phasellus
          semper mauris id est facilisis lacinia. Nullam nec maximus nunc.
          Mauris sed scelerisque arcu, sed commodo velit. Vivamus scelerisque
          turpis quis risus consectetur tempus. Fusce eget odio scelerisque,
          sodales sem ut, ullamcorper dui. Cras sapien orci, ullamcorper sed
          erat vitae, tempus consectetur erat. Etiam pretium justo vel turpis
          cursus fermentum. Vestibulum id iaculis ante.
        </p>
        <h3>Zapraszam!</h3>
      </div>
    </section>
  );
}

export default About;
