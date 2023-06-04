import React, { Component } from 'react'
import MainTitle from '../../../container/MainTitle'
import Items from './Items';
import Img1 from '../../../../assets/images/game-01.jpg' 
import Img2 from '../../../../assets/images/game-02.jpg' 
import Img3 from '../../../../assets/images/game-03.jpg' 
import Btn from '../../../container/Btn'

class TopDownload extends Component {
    constructor() {
        super();
        this.mainTitle = {
            first: "downloaded",
            title: "top"
        }
        this.item = {
            img: [Img1, Img2, Img3],
            name: ["fortnite","CS-GO","pugG"],
            band: ["sandbox","legendary","battle royale"],
            stars: [4.9,4.7,4.8],
            downloads: ["2.3M","2.1M","2.2M"],
        }
    }
    generateItem(i) {
        return <Items img={this.item.img[i]} name={this.item.name[i]} band={this.item.band[i]} stars={this.item.stars[i]} downloads={this.item.downloads[i]}/>;
    }
    render() {
        return (
            <div className='top-download bg-darkAlt rounded-5 p-4 position-relative'>
                <MainTitle first={this.mainTitle.first}>{this.mainTitle.title}</MainTitle>
                <div className='items mt-4 d-flex flex-column gap-5 mb-2'>
                    {this.generateItem(0)}
                    {this.generateItem(1)}
                    {this.generateItem(2)}
                </div>
                <Btn link="#" name="view all games"/>
            </div>
        )
    }
}

export default TopDownload;
