import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Btn extends Component {
    render() {
        return (
            <Link target={this.props?.target} to={this.props.link} className='btn main bg-pink mx-auto mx-md-0 rounded-5 mt-4 px-3 d-flex justify-content-center align-items-center tr-1'>
                <span className='text-white fs-md2 tr-1'>{this.props.name}</span>
            </Link>
        )
    }
}

export default Btn;
