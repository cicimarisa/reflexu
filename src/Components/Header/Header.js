import './Header.scss';
import ham from "../../img/ham.svg";
import exit from "../../img/exit.svg";
import React, { Component } from 'react';

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
                    <a href="#" className="logo">ReflexU<span>School</span></a>

                    <img id="mobile-cta" className="mobile-menu" src={ham} alt="Open Navigation" onClick={this.handleClick} />

                    <nav className={menuActive}>
                        <img id="mobile-exit" className="mobile-menu-exit" src={exit} alt="Exit" onClick={this.handleClick} />
                        <ul className="primary-nav">
                            <li className="current"><a href="#">Home</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                        <ul className="secondary-nav">
                            <li><a href="#">Forum</a></li>
                            <li className="go-premium-cta"><a href="#">En</a></li>
                        </ul>
                    </nav>

                </div>
            </div >
        );
    }
}

export default Header;