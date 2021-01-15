import React, {Component} from 'react';
import Navbar from './components/Navbar';
import NewChirpBox from './components/NewChirpBox';
import ChirpPanel from './components/ChirpPanel'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBox: false,
            array: []
        };
    }

    updateArray = (newChirp) => {
        this.setState({
            array: [...this.state.array, newChirp]
        })
    }

    updateBox = (sharedVal) => {
        this.setState({
            newBox: sharedVal
        })
    }
    
    render() {
        return(
            <div className="container">
                <Navbar newBox={this.state.newBox} updateBox={this.updateBox}/>
                <NewChirpBox array={this.state.array} updateArray={this.updateArray} newBox={this.state.newBox} updateBox={this.updateBox}/>
                <ChirpPanel array={this.state.array}/>
            </div>
        )
    }
}

export default App;