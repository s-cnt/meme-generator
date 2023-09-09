import React, { Component } from "react";

class Forms extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: ""

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target

        type === "checkbox" ? this.setState({ [name]: value }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form onSubmit={this.handleChange}>
                <input type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="Firts Name"
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />

                <br />

                <textarea
                    // value={"some dafault values"}
                    value={`${this.state.firstName} ${this.state.lastName}`}
                    onChange={this.handleChange}
                />

                <br />

                <label>
                    <input

                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input

                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <br />

                <label>
                    <input

                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br />
                <label>Favorite Color:</label>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>

                </select>


                {/* <h1>{this.state.firstName} {this.state.lastName}</h1> */}
                <h1>You are a {this.state.gender}</h1>
                <h1>Your favourite color is {this.state.favColor}</h1>
                <button ></button>
            </form>
        )
    }
}

export default Forms