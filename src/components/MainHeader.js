import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../styles/header.scss';

export default class MainHeader extends React.Component {

    render() {
        return (
            <div className={"main-header"}>
                <div style={{ backgroundColor: 'rgba(253,151,39,'+this.props.headerOpacity+')' }} className={"header-overlay"}/>
                <div className={"container"}>
                    <span className={"site-slogan"}>Find the best recipes!</span>
                </div>
            </div>
        );
    }
}