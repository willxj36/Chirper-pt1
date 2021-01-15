import React, { Component } from 'react';
import NewChirpBox from './NewChirpBox';

class Navbar extends Component {
    state = {
        userName: 'anonymous',
        newBox: false
    }

    handleClick = () => {
        if (this.state.newBox) {
            this.setState({
                newBox: false
            })
        } else {
            this.setState({
                newBox: true
            })
        }
    }

    render() {
        return (
            <div id="top-container col">
                <nav className="navbar navbar-dark bg-success shadow rounded">
                    <a href="#" className="btn btn-dark" role="button">Chirper Home</a>
                    <span>Welcome, {this.state.userName}</span>
                    <button onClick={this.handleClick} className="btn btn-primary">New Chirp</button>
                </nav>
            </div>
        )
    }
}

export default Navbar;