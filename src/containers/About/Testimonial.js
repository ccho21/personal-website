import React, { Component } from "react";
import nature8 from "../../assets/images/nat-8.jpg";
class Testimonial extends Component {
    render() {
        return (
            <section className='testimonial'>
                <div className='container-fluid'>
                    <div className=''>
                        <h3 className='sub-heading__title'>Testimonials</h3>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='story'>
                                <div className='story__box'>
                                    <img
                                        src={nature8}
                                        alt='Person on a tour'
                                        className='story__img'
                                    />
                                    <figcaption className='story__caption'>
                                        Mary Smith
                                    </figcaption>
                                </div>
                                <div className='story__text'>
                                    <h3 className='heading-tertiary u-margin-bottom-small'>
                                        I had the best week ever with my family
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ipsum
                                        sapiente aspernatur libero repellat quis
                                        consequatur ducimus quam nisi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='story'>
                                <div className='story__box'>
                                    <img
                                        src={nature8}
                                        alt='Person on a tour'
                                        className='story__img'
                                    />
                                    <figcaption className='story__caption'>
                                        Mary Smith
                                    </figcaption>
                                </div>
                                <div className='story__text'>
                                    <h3 className='heading-tertiary u-margin-bottom-small'>
                                        I had the best week ever with my family
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Aperiam, ipsum
                                        sapiente aspernatur libero repellat quis
                                        consequatur ducimus quam nisi
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

export default Testimonial;
