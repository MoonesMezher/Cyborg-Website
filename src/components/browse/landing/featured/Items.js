import React, { Component } from 'react'
import {FaStar, FaDownload} from 'react-icons/fa'

class Items extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image position-relative overflow-hidden'>
                    <img src={this.props.img} alt="item" className='rounded-5'/>
                </div>
                <div className='mt-2'>
                    <div className="d-flex justify-content-between">
                        <h6 className='text-white'>{this.props.title}</h6>
                        <span className='text-white d-flex align-items-center gap-1'><FaStar className='text-yellow'/> {this.props.stars}</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span className='text-secondryy'>{this.props.downloads} downloads</span>
                        <span className='text-white d-flex align-items-center gap-1'><FaDownload className='text-pink'/> {this.props.downloadsBtn}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;