import React, { Component } from "react";
import Service from './Service';
import Testimonial from './Testimonial';
import Interest from './Interest';
// SERVICES
// TESTIMONIALS
// INTERESTS
class About extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <section className='main-page'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0'>
                            <div className='main-page__image-box' />
                        </div>

                        <div className='col-md-6 p-0'>
                            <div className='main-page__text-box'>
                                <div className=' col-md-12 main-heading mb-5'>
                                    <h5 className='text-white-50'>
                                        Front End Developer / WordPress / React
                                    </h5>
                                    <h1 className='main-heading__title'>
                                        CHANGSOO CHO
                                    </h1>
                                    <p>
                                        Praesent pellentesque
                                        <span className='highliter'>
                                            hendrerit ipsum vitae rhoncus
                                        </span>
                                        . Nullam porta placerat lorem eget
                                        iaculis. Sed auctor, magna at porta
                                        auctor, enim sapien commodo mauris, non
                                        lobortis ligula libero et felis.
                                        Suspendisse rutrum libero dui, a porta
                                        mi tincidunt quis. Etiam id semper dui.
                                        Proin id erat pellentesque, sagittis
                                        lectus nec, cursus dolor.
                                    </p>
                                    <p>
                                        Vivamus nec tortor orci. Quisque sit
                                        amet lobortis massa, ac posuere enim.
                                        Curabitur sagittis malesuada massa
                                        volutpat porttitor. Pellentesque ac nibh
                                        libero. Donec pellentesque, orci nec
                                        varius vehicula, sem nisi mattis tellus,
                                        et imperdiet turpis ipsum lacinia orci.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Service />
                <Testimonial />
                <Interest />
            </div>
        );
    }
}
export default About;
