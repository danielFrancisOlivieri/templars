import React from "react";
import { RoughNotation } from "react-rough-notation";
import { TestRN } from "./notation/TestRN";
import { TestRNG } from "./notation/TestRNG";
import { types } from "./notation/types"
import "./notation/styles.css"
import Example from "./pragma" 

const notation = () => {
  return (
    <div className="NotationComponentDiv">
      <div className="content">
        <h1>
          {/* <RoughNotation type="highlight" show={true} color="#fff176">
            ReactRoughNotation Playground
          </RoughNotation> */}
          Notation Page
        </h1>
      </div>

      <Example />

      <p>
        Notes on Notation
      </p>

      {/* {types.map((type, index) => (
        <TestRN key={index} type={type} />
      ))}

      <TestRNG />
      <TestRNG reverseOrder={true} /> */}
    </div>
  );
}

export default notation
