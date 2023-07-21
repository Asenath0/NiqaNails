import "./Menu.css";
import useIsMobile from "../../hooks/useIsMobile";
import { useState } from "react";
import icon from "../../assets/menu.svg";

function Nav({ items }) {
  return (
    <div className="menu">
      {items.map((item, index) => (
        <>
          {index !== 0 && <div className="divider"></div>}
          <a className="menu-button" href={item.href}>
            {item.text}
          </a>
        </>
      ))}
    </div>
  );
}
function Menu({ items }) {
  const isMobile = useIsMobile();
  const [isNavShown, setIsNavShown] = useState(false);

  const navShownHandler = () => {
    setIsNavShown(!isNavShown);
  };
  return (
    <>
      {isMobile ? (
        <>
          <div className="icon-wrapper" onClick={navShownHandler}>
            <img className="icon" src={icon} alt="menu"></img>
          </div>
          {isNavShown && <Nav items={items} />}
        </>
      ) : (
        <Nav items={items} />
      )}
    </>
  );
}

export default Menu;
