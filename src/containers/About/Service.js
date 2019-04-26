import React, { Component } from "react";

class Service extends Component {
    render() {
        return (
            <section className='service'>
                <div className='container-fluid'>
                    <div className=''>
                        <h3 className='sub-heading__title'>Services</h3>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='service__detail'>
                                <div>
                                    <i className='far fa-calendar-alt' />
                                </div>
                                <div>
                                    <h4 className='sub-heading__sub'>
                                        WEB DESIGN
                                    </h4>
                                    <p>
                                        Nunc congue, nisi ac egestas
                                        consectetur, metus elit fermentum ante,
                                        eu malesuada nibh ipsum et diam. Class
                                        aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per
                                        inceptos himenaeos. Praesent quis purus
                                        nunc, volutpat ultricies risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='service__detail'>
                                <div>
                                    <i className='far fa-calendar-alt' />
                                </div>
                                <div>
                                    <h4 className='sub-heading__sub'>
                                        FRONT-END
                                    </h4>
                                    <p>
                                        Nunc congue, nisi ac egestas
                                        consectetur, metus elit fermentum ante,
                                        eu malesuada nibh ipsum et diam. Class
                                        aptent taciti sociosqu ad litora
                                        torquent per conubia nostra, per
                                        inceptos himenaeos. Praesent quis purus
                                        nunc, volutpat ultricies risus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='service__detail'>
                                <div>
                                    <i className='far fa-calendar-alt' />
                                </div>
                                <div>
                                    <h4 className='sub-heading__sub'>
                                        BACK-END
                                    </h4>

                                    <p>
                                        Nunc congue, nisi ac egestas
                                        consectetur, metus elit fermentum ante,
                                        eu malesuada nibh ipsum et diam. Class
                                        aptent taciti sociosqu ad
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='service__detail'>
                                <div>
                                    <i className='far fa-calendar-alt' />
                                </div>
                                <div>
                                    <h4 className='sub-heading__sub'>
                                        DATABASE
                                    </h4>

                                    <p>
                                        Nunc congue, nisi ac egestas
                                        consectetur, metus elit fermentum ante,
                                        eu malesuada nibh ipsum et
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Service;