import React, { Component } from 'react'
import altarpiece from './assets/epiphany/altarpieceKlint.jpg'
import ciotat from './assets/epiphany/ciotat.jpg'
import geometry from './assets/epiphany/geometry.jpg'
import graagBladen from './assets/epiphany/graagBladen.jpg'
import nielsonIcarus from './assets/epiphany/nielsonIcarus.jpg'
import waterfallStolk from './assets/epiphany/waterfallStolk.jpg'


const fifty = 50;

const center = {
    position: `absolute`,
    top: `50vh`,
    left: `50vw`,
    transform: `translate(${fifty}%, ${fifty}%)`
}

const backgrounds = [altarpiece, ciotat, geometry, graagBladen, nielsonIcarus, waterfallStolk];

const texts = ['Epiphanies', 'Dillard', 'terwilliger', '', '', '']

export default class epiphany extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            slideIndex: 0
        }

        this.keydownListener = this.keydownListener.bind(this);
    }

    keydownListener = (event) => {
        if (event.code === 'Space') { 
            console.log(this.state.slideIndex);
            if (this.state.slideIndex === backgrounds.length - 1) {
                this.setState({
                    slideIndex: 0
                });
            } else {
                this.setState(prevState => ({
                    slideIndex: prevState.slideIndex + 1
                }));
            }
    }}

    componentDidMount() {
        document.addEventListener('keydown', this.keydownListener);
        document.body.classList.add("no-scroll");
    }


render() {
    return(

        <div className="container"
        style={{
            width: '100vw',
        height: '100vh'
        }}
        >

<img src={backgrounds[this.state.slideIndex] } 

style={{
    backgroundImage: `url(${backgrounds[this.state.slideIndex]})`,
    backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
}}
/>   
<h1 style={center} > { texts[this.state.slideIndex]} </h1>

</div>

    )
}
}