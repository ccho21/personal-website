import React, { Component } from "react";

class Profile extends Component {
    render() {
        return (
            <section className='profile'>
            <div className='row mb-5 p-4'>
                <div className='col-md-8 mb-5'>
                    <div className='profile__main'>
                        <div className='profile__main-experience'>
                            <h4>
                                <i className='fas fa-child' /> ABOUT ME
                            </h4>
                            <p className='paragraph'>
                                Praesent pellentesque hendrerit ipsum
                                vitae rhoncus. Nullam porta placerat
                                lorem eget iaculis. Sed auctor, magna at
                                porta auctor, enim sapien commodo
                                mauris, non lobortis ligula libero et
                                felis. Suspendisse rutrum libero dui, a
                                porta mi tincidunt quis. Etiam id semper
                                dui. Proin id erat pellentesque,
                                sagittis lectus nec, cursus dolor.
                                Vivamus nec tortor orci. Quisque sit
                                amet lobortis massa, ac posuere enim.
                                Curabitur sagittis malesuada massa
                                volutpat porttitor.
                            </p>
                        </div>
                        <div className='profile__main-service'>
                            <h4>
                                <i className='fas fa-network-wired' />{" "}
                                SERVICES
                            </h4>
                            <a
                                className='btn'
                                data-toggle='collapse'
                                href='#collapseExample'
                                role='button'
                                aria-expanded='false'
                                aria-controls='collapseExample'
                            >
                                FRONT-END
                            </a>
                            <a
                                className='btn '
                                data-toggle='collapse'
                                href='#collapseExample'
                                role='button'
                                aria-expanded='false'
                                aria-controls='collapseExample'
                            >
                                BACK-END
                            </a>
                            <a
                                className='btn'
                                data-toggle='collapse'
                                href='#collapseExample'
                                role='button'
                                aria-expanded='false'
                                aria-controls='collapseExample'
                            >
                                DATABASE
                            </a>
                            <div
                                className='collapse show'
                                id='collapseExample'
                            >
                                <div className='card card-body paragraph'>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt
                                    sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 mb-5'>
                    <h4 className='section-heading__sub'>
                        <i className='fas fa-star' /> WHAT I'M GOOD AT
                    </h4>
                    <div className='profile__sidebar'>
                        <div
                            id='accordion'
                            className='profile__sidebar-skills'
                        >
                            <div className='card'>
                                <div
                                    className='card-header'
                                    id='headingOne'
                                >
                                    <h4 className='mb-0'>
                                        <button
                                            className='btn btn-link'
                                            data-toggle='collapse'
                                            data-target='#collapseOne'
                                            aria-expanded='true'
                                            aria-controls='collapseOne'
                                        >
                                            HTML5
                                        </button>
                                    </h4>
                                </div>

                                <div
                                    id='collapseOne'
                                    className='collapse show'
                                    aria-labelledby='headingOne'
                                    data-parent='#accordion'
                                >
                                    <div className='card-body'>
                                        <p className='paragraph'>
                                            Anim pariatur cliche
                                            reprehenderit, enim eiusmod
                                            high life accusamus terry
                                            richardson ad squid. 3 wolf
                                            moon officia aute, non
                                            cupidatat skateboard dolor
                                            brunch. Food truck quinoa
                                            nesciunt laborum eiusmod.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div
                                    className='card-header'
                                    id='headingTwo'
                                >
                                    <h4 className='mb-0'>
                                        <button
                                            className='btn btn-link collapsed'
                                            data-toggle='collapse'
                                            data-target='#collapseTwo'
                                            aria-expanded='false'
                                            aria-controls='collapseTwo'
                                        >
                                            CSS3
                                        </button>
                                    </h4>
                                </div>
                                <div
                                    id='collapseTwo'
                                    className='collapse'
                                    aria-labelledby='headingTwo'
                                    data-parent='#accordion'
                                >
                                    <div className='card-body paragraph'>
                                        Anim pariatur cliche
                                        reprehenderit, enim eiusmod high
                                        life accusamus terry richardson
                                        ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa
                                        nesciunt laborum eiusmod.
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div
                                    className='card-header'
                                    id='headingThree'
                                >
                                    <h4 className='mb-0'>
                                        <button
                                            className='btn btn-link collapsed'
                                            data-toggle='collapse'
                                            data-target='#collapseThree'
                                            aria-expanded='false'
                                            aria-controls='collapseThree'
                                        >
                                            JAVASCRIPT
                                        </button>
                                    </h4>
                                </div>
                                <div
                                    id='collapseThree'
                                    className='collapse'
                                    aria-labelledby='headingThree'
                                    data-parent='#accordion'
                                >
                                    <div className='card-body paragraph'>
                                        Anim pariatur cliche
                                        reprehenderit, enim eiusmod high
                                        life accusamus terry richardson
                                        ad squid. 3 wolf moon officia
                                        aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa
                                        nesciunt laborum eiusmod.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
export default Profile;
