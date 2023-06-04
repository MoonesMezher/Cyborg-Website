import React, { Component } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import MainTitle from '../../container/MainTitle'
import Swipper from '../../container/Swipper'

export default class LiveStreams extends Component {
    constructor() {
        super();
        this.mainTitleInfo = {
            first: "streams",
            name: "live"
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
            <div className='live-streams bg-darkAlt p-4 rounded-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <MainTitle first={this.mainTitleInfo.first}>{this.mainTitleInfo.name}</MainTitle>
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
