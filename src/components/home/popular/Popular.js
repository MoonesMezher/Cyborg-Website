import React, { Component } from 'react'
import MainTitle from '../../container/MainTitle'
import Card from './Card'
import Btn from '../../container/Btn'
import Img1 from '../../../assets/images/popular-01.jpg'
import Img2 from '../../../assets/images/popular-02.jpg'
import Img3 from '../../../assets/images/popular-03.jpg'
import Img4 from '../../../assets/images/popular-04.jpg'
import Img5 from '../../../assets/images/popular-05.jpg'
import Img6 from '../../../assets/images/popular-06.jpg'
import Img7 from '../../../assets/images/popular-07.jpg'
import Img8 from '../../../assets/images/popular-08.jpg'

class Popular extends Component {
    constructor() {
        super();
        this.mainTitleInfo = {
            first: "right now"
        };
        this.card = {
            img: [Img1, Img2, Img3, Img4, Img5, Img6, Img7 ,Img8],
            name: ["fortnite", "pubG", "dota2", "CS-GO", "mini-craft", "eaglrs fly", "warface", "warcaft"],
            band: ["sandbox", "battle s", "steam-X", "legendary", "legendary", "matrix games", "max 3D", "legend"]
        }
    }
    genereteCards(i) {
        return <Card name={this.card.name[i]} band={this.card.band[i]} img={this.card.img[i]}/>;
    }
    render() {
        return (
            <section className='popular w-100 p-5 rounded-5 bg-darkAlt'>
                <MainTitle first={this.mainTitleInfo.first}>most popular</MainTitle>
                <div className='cards d-grid gap-4 mb-2'>
                    {this.genereteCards(0)}
                    {this.genereteCards(1)}
                    {this.genereteCards(2)}
                    {this.genereteCards(3)}
                    {this.genereteCards(4)}
                    {this.genereteCards(5)}
                    {this.genereteCards(6)}
                    {this.genereteCards(7)}
                </div>
                <Btn name="discover popular" link="#" />
            </section>
        )
    }
}

export default Popular;
