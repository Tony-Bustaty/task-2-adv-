import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="img-container">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
      <div className="intro-container">
        <div className="welcome-container">
          <p className="welcome-text">Welcome to Little Learners Academy</p>
          <h2>
            Where Young Minds Blossom and{" "}
            <span style={{ color: "var(--logo-background)" }}>
              Dreams Take Flight.
            </span>{" "}
          </h2>
          <p style={{ fontSize: "1.6rem" }}>
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
        <div className="statistics">
          <div className="statistics-info">
            <p>+7000</p>
            <span>Students Passed Out</span>
          </div>
          <div className="statistics-info">
            <p>+37</p>
            <span>Awards and Recognitions</span>
          </div>
          <div className="statistics-info">
            <p>+15</p>
            <span>Experienced Educators</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
