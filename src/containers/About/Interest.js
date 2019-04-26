import React, { Component } from "react";
import JavaScriptLogo from "../../assets/images/javascript.png";
import NodeLogo from "../../assets/images/nodejs1.png";
import WordpressLogo from "../../assets/images/wordpress.png";
import ReactLogo from "../../assets/images/react.png";

class Interest extends Component {
    render() {
        return (
            <section className='interest'>
                <div className='container-fluid'>
                    <h3 className='sub-heading__title'>Interests</h3>
                </div>

                <div>
                    <ul className='interest-list'>
                        <li>
                            <a href='www.google.com'>
                                <img src={JavaScriptLogo} alt="JavaScriptLogo"/>
                            </a>
                        </li>
                        <li>
                            <a href='www.google.com'>
                                <img src={ReactLogo} alt="ReactLogo"/>
                            </a>
                        </li>
                        <li>
                            <a href="www.google.com">
                                <img src={NodeLogo} alt="NodeLogo"/>
                            </a>
                        </li>
                        <li>
                            <a href='www.google.com'>
                                <img src={WordpressLogo} alt="WordpressLogo"/>
                            </a>
                        </li>
                        <li>
                            <a href='www.google.com'>
                                <img src={ReactLogo} alt="ReactLogo"/>
                            </a>
                        </li>
                        <li>
                            <a href='www.google.com'>
                                <img src={JavaScriptLogo} alt="JavaScriptLogo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Interest;
