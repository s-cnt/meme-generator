import React from "react";

class Ex2 extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        let buttonText = this.state.isLoggedIn ? "LOG IN" : "LOG OUT"
        let displayText = this.state.isLoggedIn ? "Logged OUT" : "Logged IN"

        return (

            <div>

                <button onClick={() => (this.setState({ isLoggedIn: !this.state.isLoggedIn }))}> {buttonText} </button>
                <h1>Now you are:{displayText}</h1>
            </div>
        )
    }
}

export default Ex2