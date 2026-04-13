import { FaFlag, FaGraduationCap, FaMaskFace } from "react-icons/fa6";
import TopicMessage from "../ui/TopicMessage";
import "./Services.css";
import { FaCrown, FaUserFriends } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import Service from "./Service";
function Services() {
  const services = [
    {
      icon: <FaGraduationCap size={24} />,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
      icon: <FaCrown size={24} />,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
      icon: <FaMaskFace  size={24} />,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
      icon: <FaFlag  size={24} />,
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
      icon: <RiMovie2Fill size={24} />,
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
      icon: <FaUserFriends size={24} />,
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
  ];
  return (
    <div className="services-container">
      <div className="services-header">
        <TopicMessage message="Children Deserve Bright Future" />
        <h3>Our Benefits</h3>
        <p>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>
      <div className="services">
        {services.map(service=><Service key={service.title} service={service}/>)}
      </div>
    </div>
  );
}

export default Services;
