import React from "react";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const roughAnnotationStyle = {
    fontFamily: "Times",
    textAlign: "left",
    marginLeft: '90px'
}
export function TestRNG({ reverseOrder = false }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="box"
    >
      <div className="content">
        <RoughNotationGroup show={show}>
          <p style={roughAnnotationStyle} >

    It's the forms{" "}
    <RoughNotation
              type="strike-through"
              color="#bf360c"
              order={reverseOrder ? 2 : false}
            > that rarely talk
            
             to each other that have the most to say to each other when they finally meet. 
    This is the place for those
    </RoughNotation>
    <RoughNotation
                type="underline"
                color="#bf360c"
                order={reverseOrder ? 1 : false}
              > conversations </RoughNotation> to happen. 
              <RoughNotation
                type="highlight"
                color="#f8ed62"
                order={reverseOrder ? 1 : false}
              > Graphs</RoughNotation> about 
              <RoughNotation
                type="highlight"
                color="#f8ed62"
                order={reverseOrder ? 1 : false}
              > philosophy</RoughNotation>, venn diagrams about relationships, code about literature. 
              <RoughNotation
              type="bracket"
              color="#bf360c"
              order={reverseOrder ? 2 : false}
            >
    If you want to see poetry written in code and code written like poetry, you're in the right place. 
    </RoughNotation>
            
          </p>
        </RoughNotationGroup>
        <button className="ui button" type="button" onClick={() => setShow(!show)}>
          Annotate This Text
        </button>
      </div>
    </div>
  );
}
