import React, { Component } from 'react';

class ChirpPanel extends Component {
    
    render() {
        return (
            <div className="col align-self-center" id="chirp-panel">
                <div className="border border-danger rounded-lg shadow p-3 m-2" key="chirp1">
                    <h3 className="lead username">XxPowerDev9000xX</h3>
                    <p className="post">Hey guys, I'm making a posty post-like post. A post with lots of random text to make sure I'm working correctly within the actual webpage. So look at my post, ok?</p>
                </div>
                <div className="border border-danger rounded-lg shadow p-3 m-2" key="chirp2">
                    <h3 className="lead username">1337h4xx0r</h3>
                    <p className="post">Interesting post, but have you considered this here post instead? It's pretty great imho.</p>
                </div>
                <div className="border border-danger rounded-lg shadow p-3 m-2" key="chirp3">
                    <h3 className="lead username">MrEverythingIsPolitics</h3>
                    <p className="post">I'm just here to make a baseless Hitler comparison against [insert politician of opposing camp here] even though no one was even talking about politics. Please give me attention.</p>
                </div>
                {this.props.array}
            </div>
        )
    }
}

export default ChirpPanel;