import React from 'react';

export class Definition extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <h2>{this.props.word}</h2>
            <br />
           <p> {this.props.partOfSpeech} </p>
            <hr />
            {this.props.definition}
        </div>
      );
    }
  }