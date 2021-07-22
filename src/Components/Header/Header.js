import './Header.scss';
import ham from "../../img/ham.svg";
import exit from "../../img/exit.svg";
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        let menuActive = this.state.isToggleOn ? 'isActive' : '';
        return (
            <div className="navbar">
                <div className="container">
                    <NavLink to="/" className="logo">ReflexU<span>School</span></NavLink>
                    
                    <img id="mobile-cta" className="mobile-menu" src={ham} alt="Open Navigation" onClick={this.handleClick} />

                    <nav className={menuActive}>
                        <img id="mobile-exit" className="mobile-menu-exit" src={exit} alt="Exit" onClick={this.handleClick} />
                        <ul className="primary-nav">
                            <li><NavLink exact to="/" className="r-item" activeClassName="current">Home</NavLink></li>
                            <li><NavLink exact to="/tutorials" className="r-item" activeClassName="current">Tutorials</NavLink></li>
                        </ul>
                        <ul className="secondary-nav">
                            <li><NavLink to="/" className="r-item">Forum</NavLink></li>
                            <li className="go-premium-cta"><NavLink to="/" className="r-item">En</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </div >
        );
    }
}

export default Header;