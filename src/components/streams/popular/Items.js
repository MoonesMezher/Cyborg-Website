import React, { Component } from 'react'
import {FaCheck, FaEye, FaGamepad} from 'react-icons/fa'

class Items extends Component {
    render() {
        return (
            <div className='item'>
                <div className='img position-relative'>
                    <img src={this.props.img} alt="most-popular" className='rounded-5'/>
                    <div className='info position-absolute align-items-center d-flex opacity-0 tr-1 flex-column gap-4 z-2'>
                        <span className='text-white rounded-5 bg-pink pointer px-3 py-2 fs-sm2'>live</span>
                        <span className='text-white d-flex align-items-center gap-1 rounded-5 bg-pink pointer px-3 py-2 fs-sm2'>
                            <FaEye className='text-white'/>{this.props.views}
                        </span>
                        <span className='text-white d-flex align-items-center gap-1 rounded-5 bg-pink pointer px-3 py-2 fs-sm2'>
                            <FaGamepad className='text-white'/>{this.props.game}
                        </span>
                    </div>
                </div>
                <div className='info d-flex gap-3 mt-3'>
                    <img src={this.props.profile} alt="profile" className='rounded-5' />
                    <div className='details '>
                        <div className='name d-flex gap-2 align-items-center'>
                            <span className='rounded-5 p-1 bg-pink d-flex justify-content-center align-items-center'>
                                <FaCheck className='text-white fs-sm1'/>
                            </span>
                            <span className='text-pink'>{this.props.name}</span>
                        </div>
                        <h5 className='text-white fw-bolder mt-1'>{this.props.title}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;