import React, { Component } from "react";

class Ex extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: []
        }
    }

    render() {
        return (
            <div>
                {
                    // this.state.unreadMessages.length > 0 &&
                    // <h2>You have {this.state.unreadMessages.length} unread messages !</h2>

                    this.state.unreadMessages.length > 0 ?
                        <h2>You have {this.state.unreadMessages.length} unread messages</h2> :
                        <h2>NO messages!</h2>
                }
            </div>
        )
    }
}

export default Ex