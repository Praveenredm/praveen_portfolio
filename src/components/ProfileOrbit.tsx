import profileImg from "@/assets/profile.jpg";

import reactLogo from "@/assets/logos/react.png";
import javaLogo from "@/assets/logos/java.png";
import pythonLogo from "@/assets/logos/python.png";
import awsLogo from "@/assets/logos/aws.png";

import "./ProfileOrbit.css";

const logos = [reactLogo, javaLogo, pythonLogo, awsLogo];

export default function ProfileOrbit() {
  return (
    <div className="orbit-container">
      <div className="orbit">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className={`orbit-logo orbit-logo-${index}`}
            alt="tech-logo"
          />
        ))}
      </div>

      <img
        src={profileImg}
        alt="Praveen Profile"
        className="profile-img"
      />
    </div>
  );
}
