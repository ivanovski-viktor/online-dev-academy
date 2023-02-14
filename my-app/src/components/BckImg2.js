import "./BckImg2Styles.css"

import React, {Component} from 'react'

class BckImg2 extends Component{
    render(){
        return (
            <div className="bck-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default BckImg2