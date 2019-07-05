import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/header.scss'

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav style={{ backgroundColor: (this.props.headerOpacity === 1) ? 'rgba(253,151,39,1)' : 'transparent' }}>
                    <div className={"nav-wrapper"}>
                        <div className={"container"}>
                            <a href="#" className={"brand-logo"}>AirRecipes</a>
                            <div className={"right"}>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">search</i>
                                    <input id="searchBar" type="text" className="validate"/>
                                    <label htmlFor="searchBar">Search</label>
                                </div>
                            </div>
                            <button style={{bottom: -26 - 138 * (1 - this.props.headerOpacity), transition: 'none'}} className="btn-floating btn-large waves-effect waves-light z-depth-3 filter-button">
                                <i className="material-icons">filter_list</i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}