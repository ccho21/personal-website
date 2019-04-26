import React, { Component } from "react";
import CodingSkill from "../CodingSkill/CodingSkill";

class Resume extends Component {
    render() {
        return (
            <section className='resume'>
                <div className='container-fluid'>
                    <header>
                        <h2 className='section-heading__title'>Resume</h2>
                        <div className='section-line text-right'>
                            3 years experience
                        </div>
                    </header>
                    <div className='row mb-5'>
                        <div className='col-lg-7 mb-5'>
                            <div className='resume__main'>
                                <div className=''>
                                    <h3 className='sub-heading__title'>
                                        EDUCATION
                                    </h3>
                                </div>
                                <ul className='resume-experience'>
                                    <li>
                                        <div className='resume-left'>
                                            <div className='date'>
                                                <strong className=''>
                                                    Sept. 2009 to Jul. 2012
                                                </strong>
                                            </div>
                                            <div className='employer'>
                                                <span> Redware Limited </span>
                                            </div>
                                        </div>
                                        <div className='resume-divider'>
                                            <div className='resume-divider__line' />
                                        </div>
                                        <div className='resume-right'>
                                            <div className='position'>
                                                <strong>
                                                    Redware Limited - Graphic
                                                    Designer
                                                </strong>
                                                <div className='link'>
                                                    <a href='www.google.com'>
                                                        www.google.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className='paragraph'>
                                                Vivamus lectus nibh, dignissim
                                                in accumsan in, tempus eget
                                                urna. Aliquam id quam in magna
                                                varius pharetra ac eget est.
                                                Nullam ornare gravida volutpat.
                                                Nunc at quam eget ligula
                                                vehicula imperdiet in id tortor.
                                                Donec vehicula aliquet tellus,
                                                id lacinia justo euismod sit
                                                amet fusce.
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className=''>
                                    <h3 className='sub-heading__title'>
                                        EXPERIENCES
                                    </h3>
                                </div>
                                <ul className='resume-experience'>
                                    <li>
                                        <div className='resume-left'>
                                            <div className='date'>
                                                <strong className=''>
                                                    Sept. 2009 to Jul. 2012
                                                </strong>
                                            </div>
                                            <div className='employer'>
                                                <span> Redware Limited </span>
                                            </div>
                                        </div>
                                        <div className='resume-divider'>
                                            <div className='resume-divider__line' />
                                        </div>
                                        <div className='resume-right'>
                                            <div className='position'>
                                                <strong>
                                                    Redware Limited - Graphic
                                                    Designer
                                                </strong>
                                                <div className='link'>
                                                    <a href='www.google.com'>
                                                        www.google.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className='paragraph'>
                                                Vivamus lectus nibh, dignissim
                                                in accumsan in, tempus eget
                                                urna. Aliquam id quam in magna
                                                varius pharetra ac eget est.
                                                Nullam ornare gravida volutpat.
                                                Nunc at quam eget ligula
                                                vehicula imperdiet in id tortor.
                                                Donec vehicula aliquet tellus,
                                                id lacinia justo euismod sit
                                                amet fusce.
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='resume-left'>
                                            <div className='date'>
                                                <strong className=''>
                                                    Sept. 2009 to Jul. 2012
                                                </strong>
                                            </div>
                                            <div className='employer'>
                                                <span> Redware Limited </span>
                                            </div>
                                        </div>
                                        <div className='resume-divider'>
                                            <div className='resume-divider__line' />
                                        </div>
                                        <div className='resume-right'>
                                            <div className='position'>
                                                <strong>
                                                    Redware Limited - Graphic
                                                    Designer
                                                </strong>
                                                <div className='link'>
                                                    <a href='www.google.com'>
                                                        www.google.com
                                                    </a>
                                                </div>
                                            </div>

                                            <div className='paragraph'>
                                                Vivamus lectus nibh, dignissim
                                                in accumsan in, tempus eget
                                                urna. Aliquam id quam in magna
                                                varius pharetra ac eget est.
                                                Nullam ornare gravida volutpat.
                                                Nunc at quam eget ligula
                                                vehicula imperdiet in id tortor.
                                                Donec vehicula aliquet tellus,
                                                id lacinia justo euismod sit
                                                amet fusce.
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-5 mb-5'>
                            <CodingSkill />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
