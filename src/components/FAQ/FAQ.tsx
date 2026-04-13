import Accordion from "../Accordion/Accordion";
import TopicMessage from "../ui/TopicMessage";
import "./FAQ.css";
function FAQ() {
  const accordions = [
    {
      title: "What are the school hours at Little Learners Academy?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "Is there a uniform policy for students?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "What extracurricular activities are available for students?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "What is the teacher-to-student ratio at Little Learners Academy?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do you handle food allergies and dietary restrictions?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do you handle discipline and behavior management?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do I apply for admission to Little Learners Academy?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do I apply for the platform using my desktop?",
      details:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];
  return (
    <section className="FAQ">
      <div className="FAQ-header">
        <TopicMessage message="Solutions For The Doubts" />
        <h3>Frequently Asked Questions</h3>
        <p>
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.
        </p>
      </div>
      <div className="accordion-container">
        {accordions.map((accordion) => (
          <Accordion key={accordion.title} title={accordion.title} details={accordion.details} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
