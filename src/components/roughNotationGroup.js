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
          {/* <h3>
            <RoughNotation type="box" color="#bf360c" strokeWidth={5}>
              Annotation Group {reverseOrder && "(Reverse Order)"}
            </RoughNotation>
          </h3> */}
          <p style={roughAnnotationStyle} >
            Rough Notation provides a way to order the animation of annotations
            by creating an{" "}
            <RoughNotation
              type="highlight"
              color="yellow"
              order={reverseOrder ? 2 : false}
            >
              annotation-group
            </RoughNotation>
            . Pass the list of annotations to create a group. When{" "}
            <i>
              <RoughNotation
                type="underline"
                color="#bf360c"
                order={reverseOrder ? 1 : false}
              >
                show
              </RoughNotation>
            </i>{" "}
            is called on the group, the annotations are animated in
            <RoughNotation
                type="bracket"
                color="#bf360c"
                order={reverseOrder ? 1 : false}
              >  order</RoughNotation>.
          </p>
        </RoughNotationGroup>
        <button className="ui button" type="button" onClick={() => setShow(!show)}>
          Annotate This Text
        </button>
      </div>
    </div>
  );
}
