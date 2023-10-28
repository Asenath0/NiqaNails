import "./Opinions.css";
import opinions from "../../data/opinions.json";
import Opinion from "../../components/Opinion/Opinion";
import { useEffect, useState } from "react";

function Opinions() {
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTransform((previous) =>
          previous / -100 === opinions.length - 1 ? 0 : previous - 100
        ),
      6000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section id="opinions">
      <div>
        {opinions.map((opinion) => (
          <Opinion opinion={opinion} transform={transform} />
        ))}
      </div>
    </section>
  );
}

export default Opinions;
