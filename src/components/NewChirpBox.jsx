import React, { Component } from 'react';

class NewChirpBox extends Component {
    state = {
        nameInput: '',
        postInput: '',
        chirps: 0,
    }

    handleClick = (name, post, chirps) => {
        this.setState({ chirps: this.state.chirps + 1 });
        let postData =
            <div className="border border-danger rounded-lg shadow p-3 m-2" key={chirps}>
                <h3 className="lead username">{name}</h3>
                <p className="post">{post}</p>
            </div>;
        this.props.updateArray(postData);
        this.props.updateBox(false);
    }

    handleNameInput(value) {
        this.setState({
            nameInput: value
        })
    }

    handlePostInput(value) {
        this.setState({
            postInput: value
        })
    }

    render() {
        if (this.props.newBox) {
            return (
                <div className="col-8 shadow border rounded bg-muted" id="chirp-box">
                    <form>
                        <label htmlFor="name-input" className="form-label mt-3">Your Name</label>
                        <input onChange={event => this.handleNameInput(event.target.value)} type="text" name="name-input" id="name-input" className="form-control" />
                        <label htmlFor="post-input" className="form-label mt-3">Write your Chirp here</label>
                        <input onChange={event => this.handlePostInput(event.target.value)} type="text" name="post-input" id="post-input" className="form-control" />
                        <button onClick={() => this.handleClick(this.state.nameInput, this.state.postInput, this.state.chirps)} type="button" className="btn btn-primary shadow my-3">Submit Chirp!</button>
                    </form>
                </div>
            )
        } else {
            return null;
        }
    };
}

export default NewChirpBox;