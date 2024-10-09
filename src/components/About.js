import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h1>About Us</h1>
        <p>We are on our way to be the largest food delivery app in India</p>
        <User name={"Jarvis"} />
        <UserClass name={"Jarvis"} />
      </div>
    </div>
  );
};

export default About;
