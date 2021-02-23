import React from 'react'
import { Icon } from 'semantic-ui-react'

class WorkType extends React.Component {
    constructor(props) {
      // Required step: always call the parent class' constructor
      super(props);

       // Set the state directly. Use props if necessary.
    this.state = {
        isProfessional: props.isProfessional,
      }

    }
  
    render() {
      // whatever you like
      if(this.state.isProfessional){
        return <div><Icon name='money bill alternate outline' color='green' /> Paid Work </div>;
      }
      else{
        return <div><Icon name='fire' color='red' /> Passion Project </div>;
      }

     
    }
  }

  export default WorkType