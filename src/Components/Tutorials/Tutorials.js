import './Tutorials.scss';
import person from "../../img/html.jpg";
import search from "../../img/search.svg";
import React, { Component } from "react";

class Tutorials extends Component {
    constructor(props) {
        super(props);

        this.searchImg = React.createRef();
    }
    
    typeWriter(){

    }
    render() {
        const searchBTn = () => {
            this.searchImg.current.style.width = '80%';
            this.searchImg.current.style.paddingLeft = '60px';
            this.searchImg.current.style.cursor = 'text';
            this.searchImg.current.focus();
        };
        return (
            <div>
                <section className="tutorials-section">
                    <div className="container">
                        <div className="search-contain">
                            <img src={search} alt="search button" id="search-btn" onClick={searchBTn} />
                            <input type="text" ref={this.searchImg} placeholder="Search by title, description" />
                            <p id="tip">Hit Enter to Search</p>
                        </div>
                        <ul>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                            <li>
                                <img src={person} alt="Person" />
                                <p> <span className="title">Learning HTML</span><br />
                                    <span className="description">"The language for building web pages"</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Tutorials;