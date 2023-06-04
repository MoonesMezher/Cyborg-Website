import React, { Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer className="footer text-white text-center p-4 container">
                <p className="m-0">Copyright &copy; 2023 Cyborg Gaming Company. All rights reserved.</p>
                <p className="m-0">developer by: <a href="https://github.com/MoonesMezher" target="_blank" className="text-white tr-1">moones mezher</a></p>
            </footer>
        );
    }
}

export default Footer;