import React from 'react';

export class PragmaToolTip extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            {this.props.title}
        </div>
      );
    }
  }