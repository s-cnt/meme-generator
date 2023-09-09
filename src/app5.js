import React from "react";
import App from "./App";

class App5 extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.Handleclick = this.Handleclick.bind(this)

    }


    Handleclick() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {/* <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click and Change</button> */}
                <button onClick={this.Handleclick}>click and change</button>
            </div>
        )
    }

}

export default App5