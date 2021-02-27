import React, { Component } from 'react'
import { annotate, annotationGroup } from 'rough-notation';

export default class HtmlRoughNotation extends Component {

    constructor() {
        super();
        this.state = {color: "orange"};
      }

    render() { 

        // const a1 = annotate(document.querySelector('.underline'), { type: 'underline'});
        // console.log(a1);
// const a2 = annotate(document.querySelector('strong'), { type: 'box' });
// const a3 = annotate(document.querySelector('h3'), { type: 'circle' });

//  const ag = annotationGroup([a1]);
//  ag.show();
  return (
  <div>
      <h3> Circle this </h3>

      <em className="underline"> underline this</em>

      <strong> box this </strong>
  </div>
  
  )
    }
}
