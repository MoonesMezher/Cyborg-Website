import React, { Component } from "react";

class Container extends Component {
    render() {
        return(
            <section className="mt-3 bg-greyAlt container rounded-5 p-5">
                <div className="d-flex gap-5 align-items-center justify-content-center flex-column">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Container;