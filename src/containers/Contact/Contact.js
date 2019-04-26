import React, { Component } from "react";
import Map from "../../containers/Map/Map";

class Contact extends Component {
    render() {
        return (
            <section className='contact'>
                <header>
                    <h2 className='section-heading__title'>Contact</h2>
                    <div className='section-line text-right'>Get in touch</div>
                </header>
                <div className='profile-image'>
                    <Map
                        id='myMap'
                        options={{
                            center: { lat: 43.773504, lng: -79.442494 },
                            zoom: 13
                        }}
                        onMapLoad={map =>
                            new window.google.maps.Marker({
                                position: { lat: 43.773504, lng: -79.442494 },
                                map: map,
                                title: "Hello Welcome!"
                            })
                        }
                    />
                </div>
                <div className='row p-0'>
                    <div className='col-md-5 mb-5'>
                        <div className='contact-container'>
                            <div className='contact__info'>
                                <h4>CHARLES CHO</h4>
                                <ul className='list-unstyled'>
                                    <li>
                                        <i className='far fa-envelope' />
                                        <span className='highliter'>
                                            Location
                                        </span>
                                        <br />
                                        <p>Toronto</p>
                                    </li>
                                    <li>
                                        <i className='fas fa-desktop' />
                                        <span className='highliter'>
                                            {" "}
                                            Website
                                        </span>{" "}
                                        <br />
                                        <a
                                            href='http://changsoocho.me'
                                            className='hyperlink'
                                        >
                                            http://changsoocho.me
                                        </a>
                                    </li>
                                    <li>
                                        <i className='fas fa-envelope-open-text' />
                                        <span className='highliter'>
                                            {" "}
                                            Email
                                        </span>
                                        <br />
                                        <a
                                            href='changsoo.charles.cho@gmail.com'
                                            className='hyperlink'
                                        >
                                            changsoo.charles.cho@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className='fas fa-phone' />
                                        <span className='highliter'>
                                            {" "}
                                            Phone
                                        </span>
                                        <br />
                                        <p>647-833-1458</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 mb-5'>
                        <div>
                            <form id='contact' autoComplete='off'>
                                <ul className='contact__list'>
                                    <li className='contact__list-item'>
                                        <input
                                            className=''
                                            placeholder='Name'
                                            type='text'
                                            name='name'
                                        />
                                        <label className='contact__list-item-label' />
                                    </li>
                                    <li className='contact__list-item'>
                                        <input
                                            className=''
                                            placeholder='Email'
                                            type='email'
                                            name='email'
                                        />
                                        <label className='contact__list-item-label' />
                                    </li>
                                    <li className='contact__list-item'>
                                        <input
                                            className=''
                                            placeholder='Subject'
                                            type='text'
                                            name='subject'
                                        />
                                        <label className='contact__list-item-label' />
                                    </li>
                                    <li className='contact__list-item'>
                                        <div className='textarea-box'>
                                            <textarea
                                                className=''
                                                placeholder='Message'
                                                name='msg'
                                            />
                                            <label className='contact__list-item-label' />
                                        </div>
                                    </li>
                                    <li className='contact__list-item text-right'>
                                        <input
                                            id='submit'
                                            type='submit'
                                            className='btn btn-outline-white px-5 py-3'
                                            value='SEND'
                                        />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;
