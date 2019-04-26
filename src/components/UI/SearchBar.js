import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        keyword: ""
    };
    render() {
        return (
            <div className='search-bar'>
                <div className='input-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Search Projects'
                        onChange={e =>
                            this.setState({ keyword: e.target.value })
                        }
                        onKeyUp={e => {
                            if (e.key === "Enter") {
                                this.props.search(this.state.keyword);
                                this.setState({
                                    keyword: ""
                                });
                            }
                        }}
                        value={this.state.keyword}
                    />
                    <div className="input-group-append">
                    <button
                        className='btn btn-success'
                        onClick={() => {
                            this.props.search(this.state.keyword);
                            this.setState({
                                keyword: ""
                            });
                        }}
                    >
                    <i className="fas fa-search"></i>
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
