import React, { Component } from "react";

import 'src/styles/App.css';

class App extends Component {

    state = {
        color: 'blue'
    }

    toggleColor = () => {
        const color = this.state.color === 'blue' ? 'red' : 'blue'
        this.setState({color})
    }

    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>Example component</h1>
                <button onClick={this.toggleColor}>Click me!</button>
            </div>
        );
    }
}
export default App;
