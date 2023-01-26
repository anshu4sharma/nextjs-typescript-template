import React from "react";
import { UseGlobalContext } from "context/UserContext";
const About = () => {
  const data = UseGlobalContext();
  console.log(data);
  return (
    <div>
      <h1 className="text-primary">this is about page </h1>
      <p className="text-error">this is about page </p>
    </div>
  );
};

export default About;
