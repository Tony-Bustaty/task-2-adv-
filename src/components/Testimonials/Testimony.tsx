import Rating from "./Rating";

interface TestimonyProps {
  testimony: {
    avatar: string;
    name: string;
    rating: number;
    testimony: string;
  };
}
function Testimony({
  testimony: { avatar, name, rating, testimony },
}: TestimonyProps) {
  return (
    <div className="testimony">
      <div className="testimony-header">
        <div className="profile-container">
            <img src={avatar} alt="avatar" />
        </div>
        <p>{name}</p>
      </div>
      <Rating rating={rating}/>
      <div className="testimony-details">
        <p>{testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
