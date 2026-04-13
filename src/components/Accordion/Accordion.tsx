import { useState } from "react";
import "./Accordion.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import Separator from "./Separator";
interface AccordionProps {
  title: string;
  details: string;
}
function Accordion({ details, title }: AccordionProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className="accordion"
      style={{ backgroundColor: `${show ? "#FFFFFF" : "#FFEFE5"}` }}
    >
      <div>
        <h3 className="title">{title}</h3>
        <div className={`accordion-content ${show ? "show" : ""}`}>
          <Separator />
          <p className="details">{details}</p>
        </div>
      </div>
      <button className="icon" onClick={() => setShow(!show)}>
        {!show ? <FaPlus /> : <FaMinus />}
      </button>
    </div>
  );
}

export default Accordion;
