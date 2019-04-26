import React, { Component } from "react";

import logoImage from "../../assets/images/profile.jpg";
class Project extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        /* console.log('next props in [project]',nextProps.match);
        console.log('this.props in [project]', this.props); */
        return false;
      return !(nextProps.selectedProject !== this.props.selectedProject);
    }
    render() {
        /* console.log("[PROJECT UPDATED]", this.props); */
        return (
            <article className='project' onClick={this.props.clicked}>
                <div className='project-container'>
                    <img className='project-img' src={logoImage} alt='' />
                    <div className='project-hover'>
                        <div className='project-hover__up'>
                            <div className='title'>{this.props.project.title}</div>
                            <div className='icon'>
                                <i className='far fa-image' />
                            </div>
                        </div>
                        <ul className='tags'>
                            {this.props.project.languages
                                .slice(0, 3)
                                .map(language => (
                                    <li key={language}>#{language}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </article>
        );
    }
}
export default Project;
