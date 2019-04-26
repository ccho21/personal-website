import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import axios from "axios";
import Project from "../../components/Project/Project";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import SearchBar from "../../components/UI/SearchBar";

class Projects extends Component {
    state = {
        projects: [],
        selectedProject: false,
        filteredProjects: [],
        searchValid: true
    };
    componentDidMount() {
        console.log('component did mount');
        axios.get('https://charles-13af0.firebaseio.com/projects.json')
            .then(res => {
                let projects = [];
                for(let key in res.data) {
                    const project = res.data[key];
                    project.id = key;
                    projects.push(project);
                }
                if (res) {
                    this.setState({
                        projects: projects
                    });
                    console.log("data is successfully fetched", res);
                }
            })
            .catch(error => {
                console.log("failed :", error);
                this.setState({ error: true });
            });
    }

    tagClickHandler = e => {
        // get rid of active class,
        const target = e.target;
        const children = [...e.target.parentNode.children];
        children.map(child => (child.className = ""));

        // add active class on current target
        target.className = "tag-active";

        // move to filter function
        this.searchHandler(target.innerText.toLowerCase());
    };

    searchHandler = keyword => {
        const query = keyword.trim().toLowerCase();
        const projects = [...this.state.projects];
        if (query === "all") {
            this.setState({
                filteredProjects: projects
            });
            return;
        }

        let updatedProjects = projects.filter(project => {
            let valid = false;
            if (project.title.toLowerCase().includes(query)) return true;
            if (project.description.toLowerCase().includes(query)) return true;
            if (!valid) {
                return project.languages.find(language =>
                    language.toLowerCase().includes(query)
                );
            }
            return valid;
        });
        if (updatedProjects.length > 0) {
            this.setState({
                filteredProjects: updatedProjects,
                searchValid: true
            });
        } else {
            this.setState({
                searchValid: false
            });
        }
    };
    getAvailableTags() {
        const projects = this.state.projects;
        // Starting with All to show every projects
        const getAllTags = ["All"];

        for (const key in projects) {
            getAllTags.push(...projects[key].languages);
        }
        const filteredTags = [...new Set(getAllTags)];
        return filteredTags.map((tag, i) => {
            if (i === 0) {
                return (
                    <li
                        key={tag}
                        className='tag-active'
                        onClick={this.tagClickHandler}
                    >
                        {tag}
                    </li>
                );
            }
            return (
                <li key={tag} onClick={this.tagClickHandler}>
                    {tag}
                </li>
            );
        });
    }

    projectSelectedHandler = id => {
        this.setState({
            selectedProject: true
        });
        this.props.route.history.push("/portfolio/" + id);
    };
    cancelButtonHandler = e => {
        console.log("in handler", this.props);
        if (
            e.target.className === "project-detail" ||
            e.target.closest(".cancel-btn")
        ) {
            this.props.route.history.replace("/portfolio");
            this.setState({
                selectedProject: false
            });
        }
    };
    render() {
        let tags = null;
        let projects = <p style={{ textAlign: "center" }}>No results Found</p>;
        let updatedProjects = this.state.filteredProjects;
        if (!this.state.error && this.state.searchValid) {
            // get all the tags
            tags = this.getAvailableTags();
            if (updatedProjects.length > 0) {
                updatedProjects = this.state.filteredProjects;
            } else {
                updatedProjects = this.state.projects;
            }
            projects = updatedProjects.map((project, i) => {
                return (
                    <CSSTransition
                        key={project.id}
                        in={true}
                        timeout={1000}
                        classNames='fade'
                        unmountOnExit
                    >
                        <Project
                            project={project}
                            clicked={() =>
                                this.projectSelectedHandler(project.id)
                            }
                            selectedProject={this.state.selectedProject}
                        />
                    </CSSTransition>
                );
            });
        }
        return (
            <section className='projects'>
                <header>
                    <h2 className='section-heading__title'>Portfolio</h2>

                    <div className='section-line text-right'>My work</div>
                </header>

                <div className='search'>
                    <div className='search-by-query'>
                        <SearchBar search={this.searchHandler} />
                    </div>
                    <ul className='filter-by-tags'>{tags}</ul>
                </div>

                <div className='projects-container'>{projects}</div>

                <CSSTransition
                    in={this.state.selectedProject}
                    timeout={300}
                    classNames='alert'
                    unmountOnExit
                >
                    <div className='project-container'>
                        <Route path={this.props.route.match.url + "/:id"}>
                            {route => {
                                return (
                                    <ProjectDetail
                                        route={route}
                                        canceled={this.cancelButtonHandler}
                                        selectedProject={
                                            this.state.selectedProject
                                        }
                                    />
                                );
                            }}
                        </Route>
                    </div>
                </CSSTransition>
            </section>
        );
    }
}
export default Projects;
