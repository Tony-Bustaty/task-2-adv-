import TopicMessage from "../ui/TopicMessage";
import "./Explore.css";
import ExploreOption from "./ExploreOption";
function Explore() {
  const exploreOptions = [
    {
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      linkTo: "",
    },
    {
      title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      linkTo: "",
    },
    {
      title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",

      linkTo: "",
    },
    {
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      linkTo: "",
    },
  ];
  return (
    <section className="Explore">
      <div className="Explore-header">
        <TopicMessage message="Explore More" />
        <h3>Navigate through our Pages</h3>
        <p>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className="Explore-more-container">
        {exploreOptions.map((option) => (
          <ExploreOption key={option.title} option={option} />
        ))}
      </div>
    </section>
  );
}

export default Explore;
