import React, { Component } from 'react'
import MainTitle from '../../container/MainTitle'
import Btn from '../../container/Btn';
import Box from './Box';
import Img1 from '../../../assets/images/service-01.jpg'
import Img2 from '../../../assets/images/service-02.jpg'
import Img3 from '../../../assets/images/service-03.jpg'

class LiveStream extends Component {
    constructor() {
        super();
        this.mainTitle = {
            first: "live stream",
            title: "how to start your"
        }
        this.box = {
            img: [Img1, Img2, Img3],
            title: ["Go To Your Profile","Live Stream Button","You Are Live"],
            text: ["Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.",
                `If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com`,
                "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website."]
        }
        this.generateBox = this.generateBox.bind(this);
    }

    generateBox(i) {
        return <Box img={this.box.img[i]} title={this.box.title[i]} text={this.box.text[i]}/>
    }
    render() {
        return (
            <section className='live-stream'>
                <MainTitle first={this.mainTitle.first}>{this.mainTitle.title}</MainTitle>
                <div className="boxes d-flex gap-4 my-5 flex-wrap">
                    {this.generateBox(0)}
                    {this.generateBox(1)}
                    {this.generateBox(2)}
                </div>
                <Btn name="go to profile" link="../profile"/>
            </section>
        )
    }
}

export default LiveStream;
