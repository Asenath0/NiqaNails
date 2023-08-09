import "./Certificate.css";

function Certificate({ title, issuing, date, type }) {
  return (
    <div className="certificate">
      <p className="title">{title}</p>
      <p className="issuing">{issuing}</p>
      <p className="date">{date}</p>
    </div>
  );
}

export default Certificate;
