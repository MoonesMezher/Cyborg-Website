import React, { Component } from 'react'
import { FaStar, FaDownload } from 'react-icons/fa';

class Items extends Component {
    render() {
        return (
            <div className='item d-flex gap-3 position-relative'>
                    <img src={this.props.img} alt='item-img' className='rounded-5'/>
                    <div className='info w-100'>
                        <h6 className='text-white m-0'>{this.props.name}</h6>
                        <p className='text-secondryy m-0'>{this.props.band}</p>
                        <div className='details mt-1 d-flex gap-2 align-items-center'>
                            <div className='d-flex gap-2 align-items-center'>
                                <div className="d-flex justify-content-between">
                                    <span className='text-white d-flex align-items-center gap-1'><FaStar className='text-yellow'/> {this.props.stars}</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span className='text-white d-flex align-items-center gap-1'><FaDownload className='text-pink'/> {this.props.downloads}</span>
                                </div>
                            </div>
                            <div className='download d-flex justify-content-center align-items-center rounded-5 tr-1 bg-greyAlt pointer'>
                                <FaDownload className='icon text-pink'/>  
                            </div>
                        </div>
                    </div>                
            </div>
        )
    }
}

export default Items;

