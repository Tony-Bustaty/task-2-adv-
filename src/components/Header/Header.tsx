import "./Header.css";
import Navbar from "./Navbar";
function Header() {
  return (
    <header>
      <div className="top-banner-container">
        <div className="top-banner"></div>
      </div>
      <Navbar/>
    </header>
  );
}

export default Header;
