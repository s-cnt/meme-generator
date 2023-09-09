import React from "react";

class Ex3 extends React.Component {
    constructor() {
        super()
        this.state = {
            Loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ Loading: true })

        fetch("http://swapi.dev/api/planets/2/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Loading: false,
                    character: data
                }
                )
            })
    }

    render() {
        const text = this.state.Loading ? "Loading" : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}
export default Ex3