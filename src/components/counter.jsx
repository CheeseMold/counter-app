import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: "https://picsum.photos/200",
        tags: ["h1"],
    };

    getListText() {
        return this.state.tags.length === 0 ? (
            "No tags"
        ) : (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}> {tag} </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div> {this.getListText()} </div>

                <h2> OR </h2>
                <div>
                    {this.state.tags.length === 0 && "No tags"}
                    {
                        <ul>
                            {this.state.tags.map((tag) => (
                                <li key={tag}> {tag} </li>
                            ))}
                        </ul>
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Counter;
