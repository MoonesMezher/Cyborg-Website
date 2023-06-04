import React, { Component } from 'react'
import MainTitle from '../../container/MainTitle';
import Btn from '../../container/Btn';
import Item from './Item';
import Img1 from '../../../assets/images/popular-01.jpg';
import Img2 from '../../../assets/images/popular-02.jpg';
import Img3 from '../../../assets/images/popular-03.jpg';

class Library extends Component {
    constructor() {
        super();
        this.mainTitleInfo = {
            first: "library"
        }
        this.item = {
            img: [Img1, Img2, Img3],
            name: ["fortnite", "pubG", "dota2"],
            band: ["sandbox", "battle s", "steam-X"],
            date: ["24/8/2023", "10/5/2023", "1/1/2023"],
            played: ["634 H 22 Mins", "63 H 12 Mins", "444 H 44 Mins"]
        }
    }
    genereteItem(i) {
        return <Item img={this.item.img[i]} name={this.item.name[i]} band={this.item.band[i]} date={this.item.date[i]} played={this.item.played[i]}/>
    }
    render() {
        return (
            <section className='library w-100 p-4 pb-5 rounded-5 bg-darkAlt'>
                <MainTitle first={this.mainTitleInfo.first}>your gamming</MainTitle>
                <div className='items'>
                    {this.genereteItem(0)}
                    {this.genereteItem(1)}
                    {this.genereteItem(2)}
                </div>
                <Btn name="view your library" link="#" />
            </section>
        )
    }
}

export default Library;
