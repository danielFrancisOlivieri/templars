import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Segment } from 'semantic-ui-react'
import * as d3 from "d3";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Click happened');
  }

  componentDidMount() {

    var samsara = d3.select(".samsaraArea")
  .append("svg")
 .attr("width", '100%')
 .attr("height", 500)
 .style('font-family', 'Times');

 // holds the d3 objects for each of the letters so they can be accessed again
 let listOfLetterObjects = [];

 function determineXValue(previousCharacter) {
     const longCharacters = ['w', 'm'];
     const shortCharacters = ['s', 't', 'r'];
     const extraShortCharacters = ['l', 'j', 'i', 'f'];
    if (longCharacters.indexOf(previousCharacter) !== -1) {
        console.log(previousCharacter);
        return 20;
    } else if (shortCharacters.indexOf(previousCharacter) !== -1) {
        return 10;
    } else if (extraShortCharacters.indexOf(previousCharacter) !== -1) {
    return 7;
}
    else {
        return 13;
    }

 }

 function createWordOfLetters(svg, word, xValue, yValue) {

    var letters = word.split('');

    console.log(letters);

    for (let i = 0; i < word.length; i++ ) {
        const previousValue = i;
        listOfLetterObjects[i] = svg.append('text')
        .text(letters[i])
        .style('font-family', 'Times')
        .style('font-size', '2em')
        .attr('x', xValue).attr('y', yValue)
        listOfLetterObjects[i].xValue = xValue;
        listOfLetterObjects[i].yValue = yValue;
        xValue += determineXValue(letters[previousValue]);
    }
 }

 function explodeWord(arrayOfD3Objects) {
    for (let i = 0; i < arrayOfD3Objects.length; i++ ) {
        let randomX = Math.floor(Math.random() * 98);
        const randomXString = String(randomX) + '%';
        let randomY = Math.floor(Math.random() * 98);
        const randomYString = String(randomY) + '%';
        arrayOfD3Objects[i].d3Object
        .transition()
        .delay(3000)
      .duration(2000)
        .attr('x', randomXString)
        .attr('y', randomYString)
    }
 }

 function explodeUniverse(arrayOfD3Objects) {
    for (let i = 4; i < 12; i++ ) {
        let randomX = Math.floor(Math.random() * 98);
        const randomXString = String(randomX) + '%';
        let randomY = Math.floor(Math.random() * 98);
        const randomYString = String(randomY) + '%';
        arrayOfD3Objects[i]
        .transition()
        .delay(3000)
      .duration(2000)
        .attr('x', randomXString)
        .attr('y', randomYString)
    }
 }



function animationCycle() { 

    // original setting

    const theUniverse = `The universe is created and destroyed`;

    createWordOfLetters(samsara, theUniverse, 50, 250 );

    console.log(listOfLetterObjects);

    explodeUniverse(listOfLetterObjects);

    /*
    var theUniverse = samsara.append('text')
        .text('The universe')
        .style('font-family', 'Times')
        .style('font-size', '2em')

        theUniverse.attr('x', '35%').attr('y', '25%')



    var isACycle = samsara.append('text')
        .text('is a cycle')
        .style('font-family', 'Times')
        .style('font-size', '2em')

        isACycle.attr('x', '35%').attr('y', '35%')
    
        var ofCreation = samsara.append('text')
        .text('of creation')
        .style('font-family', 'Times')
        .style('font-size', '2em')

        ofCreation.attr('x', '35%').attr('y', '45%')

        var andDestruction = samsara.append('text')
        .text('and destruction')
        .style('font-family', 'Times')
        .style('font-size', '2em')

        andDestruction.attr('x', '35%').attr('y', '55%')
*/

    // transition

    

};

animationCycle();

  }

  render() {
    return (
      <div>
   


<Segment
className="samsaraArea"
style={{ minHeight: 500 }}
onClick={this.handleClick}
>
</Segment>

      </div>
    );
  }
}
