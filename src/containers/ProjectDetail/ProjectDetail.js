import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

import logoImage from "../../assets/images/profile.jpg";

// TEMP
import Data from "../../containers/Projects/Data";
//

class ProjectDetail extends Component {
    // /* EACH PROJECT COMPONENTS ARE UPDATING WHEN FULL DETAIL IS POPPED */
    state = {
        loadedProject: null
    };
    componentDidMount() {
        console.log('project detail component did mount')
        this.loadData();
    }
    shouldComponentUpdate(nextProps, nextState) {
    /*     console.log('next props in detila',nextProps.match);
        console.log('this.props in details', this.props); */
        console.log(!(nextProps.selectedProject !== this.props.selectedProject) && !(nextProps.match !== this.props.match));

        return !(nextProps.selectedProject !== this.props.selectedProject) || !(nextProps.match !== null);
    }
    loadData = () => {
        if (this.props.route.match.params.id) {
            if (
                !this.state.loadedProject ||
                (this.state.loadedProject &&
                    this.state.loadedProject.id !== +this.props.route.match.params.id)
            ) {
                axios
                    .get(`https://charles-13af0.firebaseio.com/projects/${this.props.route.match.params.id}/.json`)
                    .then(res => {
                        const project = res.data;
                        this.setState({
                            loadedProject: project
                        });
                        console.log('[single data is successfully feched]');
                    })
                    .catch(error => {
                        console.log(error);
                        this.setState({ error: true });
                    });
            }
        }
    };
    convertDate = fullDate => {
        const date = moment(fullDate).format("MMM YYYY");
        return date;
    };

    render() {
        console.log("[project detail props]", this.props);
        let loadedProject = null;
        if (this.props.route.match.params.id) {
            loadedProject = <div>this post is loading!!!!</div>;
        }
        if (this.state.loadedProject) {
            loadedProject = (
                <div
                    className='project-detail'
                    onClick={e => {this.props.canceled(e)}}
                >
                    <div className='project-detail__container'>
                        <div className='cancel-btn'>
                            <i className='fas fa-times-circle' />
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <div className='image-box'>
                                        <img src={logoImage} alt='' />
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <div className='project-wrapper'>
                                        <div className='project-description'>
                                            <div className=''>
                                                <h3 className='sub-heading__title'>
                                                    Description
                                                </h3>
                                            </div>
                                            <p>
                                                <span className='icon'>
                                                    <i className='fas fa-user' />
                                                </span>
                                                <strong>Charles Cho</strong>
                                            </p>
                                            <p>
                                                <span className='icon'>
                                                    <i className='fas fa-link' />
                                                </span>
                                                <a
                                                    href={
                                                        this.state.loadedProject
                                                            .url
                                                    }
                                                >
                                                    {
                                                        this.state.loadedProject
                                                            .url
                                                    }
                                                </a>
                                            </p>
                                            <p>
                                                <span className='icon'>
                                                    <i className='far fa-calendar-alt' />
                                                </span>
                                                {this.convertDate(
                                                    this.state.loadedProject
                                                        .created_at
                                                )}{" "}
                                                to{" "}
                                                {this.convertDate(
                                                    this.state.loadedProject
                                                        .updated_at
                                                )}
                                            </p>
                                            <p>
                                                {
                                                    this.state.loadedProject
                                                        .description
                                                }
                                            </p>
                                        </div>
                                        <div className='project-technology'>
                                            <div className=''>
                                                <h3 className='sub-heading__title'>
                                                    Technologies
                                                </h3>
                                            </div>
                                            <ul className='skills'>
                                                {this.state.loadedProject.languages.map(
                                                    language => (
                                                        <li key={language}>
                                                            #{language}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className='project-resource'>
                                            <div className=''>
                                                <h3 className='sub-heading__title'>
                                                    Resource
                                                </h3>
                                            </div>
                                            <ul className='resource-links'>
                                                <li>
                                                    <i className='fab fa-linkedin' />
                                                </li>
                                                <li>
                                                    <i className='fab fa-github' />
                                                </li>
                                                <li>
                                                    <i className='fab fa-twitter' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return loadedProject;
    }
}
export default ProjectDetail;
