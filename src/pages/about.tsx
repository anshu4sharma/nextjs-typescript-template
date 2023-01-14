import React from "react";
import Layout from "layout";
const About = () => {
  return (
    <div>
      <h1 className="text-primary">this is about page </h1>
      <p className="text-error">this is about page </p>
      <div className="bg-warning text-white justify-center rounded-md flex-col items-center flex w-24 h-24 border">
        <h1>asdasdsa</h1>
      </div>
    </div>
  );
};

export default About;
About.Layout = Layout;
