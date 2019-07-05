import React from 'react';
import "../styles/card.scss";

export default class Card extends React.Component{

    render() {
        return(
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://via.placeholder.com/236"/>
                        </div>
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}