import "./Footer.css";
import { MdLocalPostOffice } from "react-icons/md";
import Logo from "../ui/Logo";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import ContactButton from "./ContactButton";

function Footer() {
  const contacts = [
    {
      icon: <MdLocalPostOffice size={20} />,
      details: "hello@littlelearners.com",
    },
    { icon: <FaPhoneAlt size={20} />, details: "+91 91813 23 2309" },
    { icon: <FaMapMarkerAlt size={20} />, details: "Somewhere in the World" },
  ];
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-col">
          <div className="footer-logo-container">
            <Logo />
            <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className="contact-buttons">
            {contacts.map((contact, index) => (
              <ContactButton
                icon={contact.icon}
                details={contact.details}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="right-col">
          <div className="links">
            <h4>Home</h4>
            <p>Features</p>
            <p>Our Testimonials</p>
            <p>FAQ</p>
          </div>
          <div className="links">
            <h4>About Us</h4>
            <p>Out Mission</p>
            <p>Our Vision</p>
            <p>Awards and Recognitions</p>
            <p>History</p>
            <p>Teachers</p>
          </div>
          <div className="links">
            <h4>Academics</h4>
            <p>Special Features</p>
            <p>Gallery</p>
          </div>
          <div className="links">
            <h4>Contact Us</h4>
            <p>Information</p>
            <p>Map & Directions</p>
          </div>
        </div>
      </div>
      <div className="terms">
        <div className="terms-container">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="socials">
          <div className="icon">
            <FaFacebook size={20} />
          </div>
          <div className="icon">
            <FaTwitter size={20} />
          </div>
          <div className="icon">
            <FaLinkedin size={20} />
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © [2026] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
