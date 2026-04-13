import "./ExploreOption.css";
interface ExploreOptionProps {
  option: {
    linkTo: string;
    title: string;
    description: string;
  };
}
function ExploreOption({ option }: ExploreOptionProps) {
  return (
    <div className="Explore-option">
      <div className="details-container">
        <div className="details">
          <div className="details-header">
            <h3>{option.title}</h3>
            <div className="image-container">
              <img src="/assets/road.png" alt="road"/>
            </div>
          </div>
          <div className="details-description">
            <p>{option.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreOption;
