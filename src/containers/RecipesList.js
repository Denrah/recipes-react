import React from 'react';
import MainHeader from '../components/MainHeader';
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default class RecipesList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            headerOpacity: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let scrollTop = window.scrollY;
        this.setState({
            headerOpacity: Math.min(1, scrollTop/134),
        });
    };

    render() {
        return(
            <div>
                <Navbar headerOpacity={this.state.headerOpacity}/>
                <MainHeader headerOpacity={this.state.headerOpacity}/>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                        <div className="col s12 m6 l4">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}