import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Data from "../Projects/Data";

class NewPost extends Component {
    state = {
        title: "",
        content: "",
        author: "Max",
        file: "",
        imagePreviewUrl: "",
        submitted: false
    };
    componentDidMount() {
        console.log(this.props);
        this.props.route.history.replace();
    }
    projectDataHandler = () => {
        const project = {
            title: this.state.title,
            description: this.state.content,
            images: this.state.file,
            languages: ['a','b',],
            url: "www.google.ca",
            created_at: "",
            updated_at: ""
        };
        console.log('projects??',project);
        axios.post("https://charles-13af0.firebaseio.com/projects.json", project)
            .then(response => {
                if (response) {
                    console.log("data is successfully Uploaded", response);
                    // this.props.history.replace("/portfolio");
                   /*  this.setState({
                        submitted: true
                    }); */
                }
            })
            .catch(error => {
                console.log("failed :", error);
                this.setState({ error: true });
            });
    };
    handleImageChange = e => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(reader);
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
    };
    render() {
        let redirect = null;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;

        if (this.state.submitted) {
            redirect = <Redirect to='/portfolio' />;
        }

        if (imagePreviewUrl) {
            $imagePreview = <img src={imagePreviewUrl} />;
        } else {
            $imagePreview = (
                <div className='previewText'>
                    Please select an Image for Preview
                </div>
            );
        }
        return (
            <div className='container p-5'>
                {redirect}
                <div className='input-group'>
                    <div className='custom-file'>
                        <input
                            type='file'
                            className='custom-file-input'
                            onChange={e => this.handleImageChange(e)}
                        />
                        >
                        <label
                            className='custom-file-label'
                            htmlFor='inputGroupFile04'
                        >
                            Choose file
                        </label>
                    </div>
                    <div className='input-group-append'>
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                        >
                            Button
                        </button>
                    </div>
                </div>
                <button onClick={this.projectDataHandler}>Add Project</button>
                <div className='imgPreview'>{$imagePreview}</div>
            </div>
        );
    }
}

export default NewPost;
