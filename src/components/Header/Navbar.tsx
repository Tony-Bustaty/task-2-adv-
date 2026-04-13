import Logo from "../ui/Logo";
import "./Navbar.css";
import NavButtons from "./NavButtons";
function Navbar() {
  const buttons = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Academic" },
    { name: "Admissions" },
    { name: "Student Life" },
    { name: "Contact" },
  ];
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Logo />
      </div>
      <NavButtons buttons={buttons} />
    </nav>
  );
}

export default Navbar;
