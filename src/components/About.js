import React from "react";
import Links from "./links";

function About(props) {
  const bio = props.bio;

  return (
    <div id="about">
      <h2>About Me</h2>

      {!!bio ? <p>{props.bio}</p> : <div style={{ display: "none" }}></div>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links link={props.links} />
    </div>
  );
}

export default About;
