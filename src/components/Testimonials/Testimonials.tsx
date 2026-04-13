import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import TopicMessage from "../ui/TopicMessage";
import "./Testimonials.css";
import Testimony from "./Testimony";
import { useEffect, useState } from "react";
function Testimonials() {
  const testimonials = [
    {
      avatar: "/icons/icongirl.png",
      name: "Jennifer B",
      rating: 5,
      testimony:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      avatar: "/icons/iconman.png",
      name: "David K",
      rating: 5,
      testimony:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ];
  function getVisibleSlides() {
    if (window.innerWidth <= 1100) return 1;
    if (window.innerWidth <= 1650) return 2;
    return 3;
  }
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(getVisibleSlides());
console.log(visible)

  useEffect(() => {
    const handleResize = () => {
      setVisible(getVisibleSlides());
      };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxIndex = testimonials.length - visible;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="testimonials-container">
      <div className="testimonials-header">
        <TopicMessage message="Their Happy Words 🤗" />
        <h3>Our Testimonials</h3>
        <p>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      <div className="testimonials">
        <div className="left-arrow">
          <button className="arrow-button" onClick={prev}>
            <BiSolidLeftArrowAlt size={24} />
          </button>
        </div>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${(index * 100) / visible}%)`,
            }}
          >
            {testimonials.map((testimony) => (
              <div className="slide" key={testimony.name}>
                <Testimony key={testimony.name} testimony={testimony} />
              </div>
            ))}
          </div>
        </div>
        <div className="right-arrow">
          <button className="arrow-button" onClick={next}>
            <BiSolidRightArrowAlt size={24} />
          </button>
        </div>
      </div>
      <div className="mobile-arrows">
        <button className="arrow-button" onClick={prev}>
          <BiSolidLeftArrowAlt size={24} />
        </button>
        <button className="arrow-button" onClick={next}>
          <BiSolidRightArrowAlt size={24} />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
