import "./Experience.css";
import Certificate from "../../components/ Certificate/Certificate";
import certificates from "../../data/certificates.json";
import { useEffect, useState } from "react";
function Experience() {
  const [shownNumber, setShownNumber] = useState(3);
  const [shownCertificates, setShownCertificates] = useState(
    certificates.slice(0, shownNumber)
  );
  const [left, setLeft] = useState(certificates.length - shownNumber);

  function showMore() {
    setShownNumber(shownNumber + 3);
    setLeft(left - 3);
    setShownCertificates(certificates.slice(0, shownNumber));
  }

  useEffect(() => {
    setShownCertificates(certificates.slice(0, shownNumber));
  }, [shownNumber]);
  return (
    <section id="experience">
      <h2>Certyfikaty</h2>
      <div className="wrapper">
        {shownCertificates.map((item, id) => (
          <Certificate
            key={id}
            title={item.title}
            issuing={item.issuing}
            date={item.date}
            type={item.type}
          />
        ))}
        {left > 0 && <button onClick={showMore}>Zobacz więcej ({left})</button>}
      </div>
    </section>
  );
}

export default Experience;
