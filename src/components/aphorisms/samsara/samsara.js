import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Segment } from 'semantic-ui-react'
import * as d3 from "d3";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
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

    for (let i = 0; i < word.length; i++ ) {
        const previousValue = i;
        listOfLetterObjects[i] = svg.append('text')
        .text(letters[i])
        .style('font-family', 'Times')
        .style('font-size', '2em')
        .attr('x', xValue).attr('y', yValue)
        listOfLetterObjects[i].xValue = xValue;
        listOfLetterObjects[i].yValue = yValue;
        listOfLetterObjects[i].character = letters[i];
        xValue += determineXValue(letters[previousValue]);
    }
 }

 function moveAndReturnCharacter(character, delay, newX, newY) {
  character.transition()
  .delay(delay)
.duration(2000)
  .attr('x', newX)
  .attr('y', newY)
  .transition()
  .delay(delay)
.duration(2000)
  .attr('x', character.xValue)
  .attr('y', character.yValue)
 }

 function generateInteger10To510() {
return Math.floor(Math.random() * 500) + 10;
 }

 function blastUniverse(delay) {
  moveAndReturnCharacter(listOfLetterObjects[4], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[5], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[6], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[7], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[8], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[9], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[10], delay, generateInteger10To510(), generateInteger10To510());

  moveAndReturnCharacter(listOfLetterObjects[11], delay, generateInteger10To510(), generateInteger10To510());

 }

function animationCycle() { 

    // original setting

    const theUniverse = `The universe is destroyed and created again.`;

    createWordOfLetters(samsara, theUniverse, 50, 250);

      blastUniverse(3000);

      blastUniverse(12000);

};

animationCycle();

  }

  render() {
    return (
      <div>
   
<Segment
className="samsaraArea"
style={{ minHeight: 500 }}
>
</Segment>

      </div>
    );
  }
}
