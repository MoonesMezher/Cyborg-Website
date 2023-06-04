import React, { Component } from 'react'
import MainTitle from '../../container/MainTitle'
import Btn from '../../container/Btn'
import Items from './Items';
import Avatar1 from '../../../assets/images/avatar-01.jpg'
import Avatar2 from '../../../assets/images/avatar-02.jpg'
import Avatar3 from '../../../assets/images/avatar-03.jpg'
import Avatar4 from '../../../assets/images/avatar-04.jpg'
import Img1 from '../../../assets/images/stream-05.jpg'
import Img2 from '../../../assets/images/stream-06.jpg'
import Img3 from '../../../assets/images/stream-07.jpg'
import Img4 from '../../../assets/images/stream-08.jpg'


class Popular extends Component {
    constructor() {
        super();
        this.maintitle = {
            first: "live stream",
            name: "most popular"
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
    generateItems(i) {
        return <Items views={this.item.views[i]} game={this.item.game[i]} profile={this.item.profile[i]}  title={this.item.title[i]} img={this.item.img[i]} name={this.item.name[i]}/>
    }
    render() {
        return (
            <section className='popular bg-darkAlt rounded-5 p-4 w-100'>
                <MainTitle first={this.maintitle.first}>{this.maintitle.name}</MainTitle>
                <div className='items d-flex justify-content-between align-items-center flex-wrap gap-3'>
                    {this.generateItems(0)}
                    {this.generateItems(1)}
                    {this.generateItems(2)}
                    {this.generateItems(3)}
                    {this.generateItems(0)}
                    {this.generateItems(1)}
                    {this.generateItems(2)}
                    {this.generateItems(3)}
                </div>
                <Btn name="load more streams" link="#"/>
            </section>
        )
    }
}

export default Popular;
