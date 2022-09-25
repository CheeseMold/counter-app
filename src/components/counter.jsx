import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold",
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
                    <button className="btn btn-secondary btn-sm">
                        Increment
                    </button>
                    <ul>
                        {this.state.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
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
