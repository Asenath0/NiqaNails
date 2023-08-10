import "./Footer.css";
import image from "../../assets/iconx3.png";

function Footer() {
  return (
    <section id="contact">
      <img src={image} alt={"logo"}></img>
      <div className="links">
        <p>(+48) 530 404 648</p>
        <p>instagram.com/nails.by.weronika.pstr/</p>
      </div>
    </section>
  );
}

export default Footer;
