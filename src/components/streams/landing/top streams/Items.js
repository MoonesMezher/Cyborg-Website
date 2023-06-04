import React, { Component } from 'react'
import { FaCheck } from 'react-icons/fa';
import Btn from '../../../container/Btn'

class Items extends Component {
    constructor() {
        super();
        this.state = {
            followed: false
        } 
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            followed: !this.state.followed
        });
    }
    render() {
        return (
            <div className='item position-relative d-flex gap-3 justify-content-center align-items-center flex-wrap'>
                <div className='img d-flex justify-content-center align-items-center gap-2'>
                    <span className='text-white fw-bold'>0{this.props.id}</span>
                    <img src={this.props.img} alt="strem-item" className='rounded-5' />
                </div>
                <div className='name d-flex gap-2 align-items-center'>
                    <span className='rounded-5 p-1 bg-pink d-flex justify-content-center align-items-center'>
                        <FaCheck className='text-white fs-sm1'/>
                    </span>
                    <span className='text-pink'>{this.props.name}</span>
                </div>
                <span className={`btn download rounded-5 ${this.state.followed?"bg-transparent p-0":"bg-pink p-2 "}`} onClick={this.handleClick}>
                    <span className={`${this.state.followed?"text-pink":"text-white"} tr-1`}>{this.state.followed?"unfollow":"follow"}</span>
                </span>
            </div>
        )
    }
}

export default Items;
