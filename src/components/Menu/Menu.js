import "./Menu.css";
import useIsMobile from "../../hooks/useIsMobile";

function Menu({ items }) {
  const isMobile = useIsMobile();
  return (
    <div className="menu">
      {!isMobile &&
        items.map((item, index) => (
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

export default Menu;
