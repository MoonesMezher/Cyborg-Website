import React, { Component } from 'react'
import MainTitle from '../../container/MainTitle';
import Btn from '../../container/Btn';
import Img1 from '../../../assets/images/stream-01.jpg'
import Img2 from '../../../assets/images/stream-02.jpg'
import Img3 from '../../../assets/images/stream-03.jpg'
import Img4 from '../../../assets/images/stream-04.jpg'
import Avatar1 from '../../../assets/images/avatar-01.jpg'
import Avatar2 from '../../../assets/images/avatar-02.jpg'
import Avatar3 from '../../../assets/images/avatar-03.jpg'
import Avatar4 from '../../../assets/images/avatar-04.jpg'
import Items from './Items';

class PopularStream extends Component {
    constructor() {
        super();
        this.mainTitle = {
            first: "live stream",
            title: "most popular"
        }
        this.item = {
            name: ["KenganC","LunaMa","Areluwa"," GangTm"],
            title: ["Just Talking With Fans","CS-GO 36 Hours Live Stream","Maybe Nathej Allnight Chillin'","Live Streaming Till Morning"],
            img: [Img1,Img2,Img3,Img4],
            profile: [Avatar1,Avatar2,Avatar3,Avatar4],
            views: ["1.2k","1.5k","12k","1.5k"],
            game: ["fortnite","CS-go","pugG","dot2"],
        }
    }

    generateItem(i) {
        return <Items name={this.item.name[i]} title={this.item.title[i]} img={this.item.img[i]} profile={this.item.profile[i]} views={this.item.views[i]} game={this.item.game[i]}/>
    }

    render() {
        return (
            <section className='popular-stream rounded-5 p-4 pb-5 bg-darkAlt w-100'>
                <MainTitle first={this.mainTitle.first}>{this.mainTitle.title}</MainTitle>
                <div className='items d-flex justify-content-between gap-3 flex-wrap'>
                    {this.generateItem(0)}
                    {this.generateItem(1)}
                    {this.generateItem(2)}
                    {this.generateItem(3)}
                </div>
                <Btn name="discover all streams" link="../streams"/>
            </section>
        )
    }
}

export default PopularStream;
