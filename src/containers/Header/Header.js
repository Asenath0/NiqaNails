import "./Header.css";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";

const menu = [
  {
    text: "O mnie",
    href: "#about",
  },
  {
    text: "Portfolio",
    href: "#portfolio",
  },
  {
    text: "Cennik",
    href: "#price-list",
  },
  {
    text: "Kontakt",
    href: "#contact",
  },
];

function Header() {
  return (
    <header>
      <Logo />
      <Menu items={menu} />
    </header>
  );
}

export default Header;
