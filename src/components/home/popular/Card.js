import React, { Component } from 'react'
import {FaStar, FaDownload} from 'react-icons/fa'

class Card extends Component {
    render() {
        return (
            <div className='card px-3 py-4 bg-dark rounded-5'>
            <div className='img'>
                <img src={this.props.img} alt='popular' className='rounded-5'/>
            </div>
            <div className='details text-white mt-3'>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='fw-bold'>{this.props.name}</span>
                    <span className='d-flex gap-1 justify-content-center align-items-center'>
                        <span className='text-yellow d-flex justify-content-center align-items-center'>
                            <FaStar />
                        </span>
                        4.8
                    </span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span className='text-secondryy'>{this.props.band}</span>
                    <span className='d-flex gap-1 justify-content-center align-items-center'>
                        <span className='text-pink d-flex justify-content-center align-items-center'>
                            <FaDownload />
                        </span>
                        2.3M
                    </span>
                </div>
            </div>
        </div>
        )
    }
}

export default Card;
