import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: "https://picsum.photos/200",
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold",
    };

    handleIncrement = () => {
        console.log("Increment Clicked");
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <img src={this.state.imageUrl} alt="not found" />
                    <span className={this.getBadgeClass()} style={this.styles}>
                        {this.formatCount()}
                    </span>
                </header>
                <div>
                    <button
                        onClick={this.handleIncrement}
                        className="btn btn-secondary btn-sm"
                    >
                        Increment
                    </button>
                </div>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClass() {
        const { count } = this.state;
        return count === 0
            ? "badge badge-warning m-5"
            : "badge badge-primary m-5";
    }
}

export default Counter;
