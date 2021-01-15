import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        userName: 'anonymous',
    }

    updateBox = () => {
        if(this.props.newBox) {
            this.props.updateBox(false);
        } else {
            this.props.updateBox(true);
        }
    }

    render() {
        return (
            <div id="top-container col">
                <nav className="navbar navbar-dark bg-success shadow rounded">
                    <a href="#" className="btn btn-dark" role="button">Chirper Home</a>
                    <span>Welcome, {this.state.userName}</span>
                    <button onClick={this.updateBox} className="btn btn-primary">New Chirp</button>
                </nav>
            </div>
        )
    }
}

export default Navbar;