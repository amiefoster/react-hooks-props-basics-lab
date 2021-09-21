import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links </h3>
      <a href={props.link.github}>{props.link.github}</a>
      {/* <a href={props.links.github}>{props.links.github}</a> */}
      <a href={props.link.linkedin}>{props.link.linkedin}</a>
    </>
  );
}

export default Links;
