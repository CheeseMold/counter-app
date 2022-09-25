import React, { Component } from "react";
import "../App.css";

class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <React.Fragment>
                <header className="Main">
                    <React.Fragment>
                        <span>{this.state.count}</span>
                    </React.Fragment>
                </header>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
