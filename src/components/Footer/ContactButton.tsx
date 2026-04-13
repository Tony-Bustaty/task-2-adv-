import type { JSX } from "react";
import "./contactButton.css";
interface ContactButtonsProps {
  icon: JSX.Element;
  details: string;
}
function ContactButton({ details, icon }: ContactButtonsProps) {
  return (
    <div className="contact">
      <div className="icon">{icon}</div>
      <p className="details">{details}</p>
    </div>
  );
}

export default ContactButton;
