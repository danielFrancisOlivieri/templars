import React from "react";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export function TestRNG({ reverseOrder = false }) {
  const [show, setShow] = useState(false);
  const [isOriginal, setButtonText] = useState(true);
  const handleOnClick = function() {
    setShow(!show);
    setButtonText(!isOriginal);
  }

  const paragraphStyle = {
    textIndent: '50px'
  }
  return (
    <div
      className="box"
      style={{ marginTop: "5px" }}
    >
      <div className="content">
        <RoughNotationGroup show={show}>
          <h2>
            <RoughNotation type="box" strokeWidth={5}>
              What is this site? {reverseOrder && "(Reverse Order)"}
            </RoughNotation>
          </h2>
          <p style={paragraphStyle}
          >
          The forms and {` `}
          <RoughNotation
              type="crossed-off"
              color="blue"
              order={reverseOrder ? 2 : false}
            >disciplines</RoughNotation>
           {` `}
          
          that rarely talk often have the most to say to each other when they finally 
          {` `}
          <RoughNotation
              type="highlight"
              color="yellow"
              order={reverseOrder ? 2 : false}
            >meet</RoughNotation>
          . 
          This is the place for those conversations to happen. 
          {` `}
          <RoughNotation
              type="circle"
              color="blue"
              order={reverseOrder ? 2 : false}
            >Graphs</RoughNotation> about <RoughNotation
            type="highlight"
            color="yellow"
            order={reverseOrder ? 2 : false}
          >philosophy</RoughNotation>, venn diagrams about relationships, maps about 
            
            literature. 
          If you want to see {` `}
          
          <RoughNotation
              type="highlight"
              color="yellow"
              order={reverseOrder ? 2 : false}
            >poetry</RoughNotation> {` `} written in {` `}
            <RoughNotation
              type="underline"
              color="#bf360c"
              order={reverseOrder ? 2 : false}
            >code</RoughNotation> {` `}
             and <RoughNotation
              type="underline"
              color="#bf360c"
              order={reverseOrder ? 2 : false}
            >code</RoughNotation> {` `} written like {` `}
            <RoughNotation
            type="highlight"
            color="yellow"
            order={reverseOrder ? 2 : false}
          >poetry</RoughNotation>, you're in the 
          <RoughNotation
            type="bracket"
            color="#bf360c"
            order={reverseOrder ? 2 : false}
          > {` `}
          right place.
          </RoughNotation>           
          </p>
        </RoughNotationGroup>
        <center>
        <button className="button" type="button" onClick={() => handleOnClick()}>
        {isOriginal ? "Annotate" : "Erase"}
        </button>

        </center>
        
      </div>
    </div>
  );
}

export default TestRNG