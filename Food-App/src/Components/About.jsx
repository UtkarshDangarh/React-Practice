import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <User
        name={"Utkarsh Dangarh"}
        address={"Indore"}
        contact={"@utkarsh_dangarh"}
      /> */}
      <UserClass />
    </div>
  );
};

export default About;
