import React, { Component } from 'react'
import { FaEye, FaPlay } from 'react-icons/fa';

class Clips extends Component {
    render() {
        return (
            <div className='clip bg-greyAlt rounded-5 p-3'>
                <div className='img position-relative'>
                    <img src={this.props.img} alt="clip" className='rounded-5' />
                    <a href='#' target='_blank' className='pointer position-absolute left-half top-half rounded-5 bg-white d-flex justify-content-center align-items-center p-3'>
                        <FaPlay className='text-pink'/>
                    </a>
                </div>
                <div className='info mt-3 d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold text-white'>{this.props.count} clip</h5>
                    <span className='d-flex justify-content-between gap-1 align-items-center text-white'>
                        <FaEye className='text-pink'/> {this.props.views}
                    </span>
                </div>
            </div>
        )
    }
}

export default Clips;
