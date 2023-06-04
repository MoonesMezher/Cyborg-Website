import React, { Component } from 'react'
import MainTitle from '../container/MainTitle'
import Img1 from '../../assets/images/popular-01.jpg'
import Img2 from '../../assets/images/popular-02.jpg'
import Img3 from '../../assets/images/popular-03.jpg'
import Img4 from '../../assets/images/popular-04.jpg'
import Img5 from '../../assets/images/popular-05.jpg'
import Img6 from '../../assets/images/popular-06.jpg'
import Img7 from '../../assets/images/popular-07.jpg'
import Img8 from '../../assets/images/popular-08.jpg'
import Card from '../home/popular/Card'

class Games extends Component {
    constructor() {
        super();
        this.mainTitle = {
            first: "games",
            title: "other related"
        };
        this.card = {
            img: [Img1, Img2, Img3, Img4, Img5, Img6, Img7 ,Img8],
            name: ["fortnite", "pubG", "dota2", "CS-GO", "mini-craft", "eaglrs fly", "warface", "warcaft"],
            band: ["sandbox", "battle s", "steam-X", "legendary", "legendary", "matrix games", "max 3D", "legend"]
        };
    }
    genereteCards(i) {
        return <Card name={this.card.name[i]} band={this.card.band[i]} img={this.card.img[i]}/>;
    }
    render() {
        return (
            <section className='games bg-darkAlt p-4 rounded-5 w-100'>
                <MainTitle first={this.mainTitle.first}>{this.mainTitle.title}</MainTitle>
                <div className='cards d-flex justify-content-between align-items-center flex-column gap-3'>
                    <div className='row position-relative d-flex align-items-center justify-content-center flex-wrap col-12'>
                        {this.genereteCards(0)}
                        {this.genereteCards(1)}
                    </div>
                    <div className='row position-relative d-flex align-items-center justify-content-center flex-wrap col-12'>
                        {this.genereteCards(2)}
                        {this.genereteCards(3)}
                    </div>
                    <div className='row position-relative d-flex align-items-center justify-content-center flex-wrap col-12'>
                        {this.genereteCards(4)}
                        {this.genereteCards(5)}
                    </div>
                    <div className='row position-relative d-flex align-items-center justify-content-center flex-wrap col-12'>
                        {this.genereteCards(6)}
                        {this.genereteCards(7)}
                    </div>
                </div>
            </section>
        )
    }
}

export default Games;
