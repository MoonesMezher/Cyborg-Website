import React, { Component } from 'react'
import MainTitle from '../../../container/MainTitle';
import Btn from '../../../container/Btn';
import Clips from './Clips';
import Img1 from '../../../../assets/images/featured-01.jpg'
import Img2 from '../../../../assets/images/featured-02.jpg'
import Img3 from '../../../../assets/images/featured-03.jpg'
import Img4 from '../../../../assets/images/popular-01.jpg'

class Popular extends Component {
    constructor() {
        super();
        this.maintitle = {
            first: "clips",
            title: "your most popular "
        }
        this.clip = {
            img: [Img1,Img2,Img3,Img4],
            views: [180,145,230,390],
            count: ["first","second","thired","fourth"]
        }
    }
    generateClip(i) {
        return <Clips img={this.clip.img[i]} views={this.clip.views[i]} count={this.clip.count[i]} />
    }
    render() {
        return (
            <div className='popular mt-3'>
                <MainTitle first={this.maintitle.first}>{this.maintitle.title}</MainTitle>
                <div className='clips d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                    {this.generateClip(0)}
                    {this.generateClip(1)}
                    {this.generateClip(2)}
                    {this.generateClip(3)}
                </div>
                <Btn name="load more clips" link="#"/>
            </div>
        )
    }
}

export default Popular;
