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

    for (let i = 0; i < word.length; i++ ) {
        const previousValue = i;
        listOfLetterObjects[i] = svg.append('text')
        .text(letters[i])
        .style('font-family', 'Times')
        .style('font-size', '2em')
        .attr('x', xValue).attr('y', yValue)
        console.log('character: ' + letters[i]);
        console.log('xValue: ' + xValue);
        console.log('yValue: ' + yValue);
        listOfLetterObjects[i].xValue = xValue;
        listOfLetterObjects[i].yValue = yValue;
        listOfLetterObjects[i].character = letters[i];
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
        console.log(arrayOfD3Objects[i]);
        arrayOfD3Objects[i].attr('x', 0).attr('y', 0)
        arrayOfD3Objects[i]
        .transition()
        .delay(3000)
      .duration(2000)
        .attr('x', randomXString)
        .attr('y', randomYString)

     // createAndTransition(samsara, listOfLetterObjects[i].character, randomXString, randomYString, arrayOfD3Objects.xValue, arrayOfD3Objects.yValue);
    }
    // reformWord(arrayOfD3Objects);
 }

 function moveCharacter(character, delay, newX, newY) {
  console.log(character);
  character.transition()
  .delay(delay)
.duration(2000)
  .attr('x', newX)
  .attr('y', newY)

 }

 function moveAndReturnCharacter(character, delay, newX, newY) {
  console.log(character);
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

 function reformWord(arrayWithValuePairs) {

    for (let i = 0; i < arrayWithValuePairs.length; i++ ) {
        arrayWithValuePairs[i]
        .transition()
        .attr('color', 'blue')
        .delay(5000)
        .duration(5000)
        .attr('x', arrayWithValuePairs[i].xValue)
        .attr('y', arrayWithValuePairs[i].yValue)
    }

 }

 function createAndTransition(svg, string, firstXValue, firstYValue, secondXValue, secondYValue) {
    svg.append('text')
    .text(string)
    .attr('x', firstXValue)
    .attr('y', firstYValue)
    .style('font-family', 'Times')
        .style('font-size', '2em')
    .transition()
    .delay(4000)
    .attr('x', secondXValue)
    .attr('y', secondYValue)
    .transition()
    .delay(4000)
    .attr('x', 320)
    .attr('y', 310)
 }

function animationCycle() { 

    // original setting

    const theUniverse = `The universe is created and destroyed`;

    createWordOfLetters(samsara, theUniverse, 50, 250);

    moveAndReturnCharacter(listOfLetterObjects[7], 3000, 200, 400);

    console.log(listOfLetterObjects);

    // explodeUniverse(listOfLetterObjects);    

    // createAndTransition(samsara, 'terwilliger', 55, 180, 80, 70);

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
