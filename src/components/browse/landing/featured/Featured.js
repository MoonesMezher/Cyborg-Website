import React, { Component } from 'react'
import MainTitle from '../../../container/MainTitle';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import Swipper from '../../../container/Swipper';

class Featured extends Component {
    constructor() {
        super();
        this.mainTitleInfo = {
            first: "games"
        } 
        this.handleClickLeft = this.handleClickLeft.bind(this);
        this.handleClickRight = this.handleClickRight.bind(this);
    }

    handleClickRight() {
        document.querySelector(".swiper-button-next").click();
    }
    handleClickLeft() {
        document.querySelector(".swiper-button-prev").click();
    }

    render() {
        return (
            <div className='featured bg-darkAlt p-4 rounded-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <MainTitle first={this.mainTitleInfo.first}>featured</MainTitle>
                    <div className='options'>
                        <FaAngleLeft className='option text-white pointer fs-4' onClick={this.handleClickLeft}></FaAngleLeft>
                        <FaAngleRight className='option text-white pointer fs-4' onClick={this.handleClickRight}></FaAngleRight>
                    </div>
                </div>
                <Swipper></Swipper>
            </div>
        )
    }
}

export default Featured;
