import React, { Component } from 'react'
import MainTitle from '../../../container/MainTitle'
import Items from './Items'
import Avatar1 from '../../../../assets/images/avatar-01.jpg'
import Avatar2 from '../../../../assets/images/avatar-02.jpg'
import Avatar3 from '../../../../assets/images/avatar-03.jpg'
import Avatar4 from '../../../../assets/images/avatar-04.jpg'

class TopStreams extends Component {
    constructor() {
        super();
        this.mainTitle = {
            first: "streams",
            title: "top"
        }
        this.item = {
            name: ["LahutaM","Kengan","Areluwa"," Omeg","GangTeam"],
            img: [Avatar1,Avatar2,Avatar3,Avatar4, Avatar1],
        }
    }
    generateItem(i) {
        return <Items id={i+1} name={this.item.name[i]} img={this.item.img[i]}/>;
    }
    render() {
        return (
            <div className='top-streams bg-darkAlt rounded-5 p-4 position-relative'>
                <MainTitle first={this.mainTitle.first}>{this.mainTitle.title}</MainTitle>
                <div className='items mt-4 d-flex flex-column gap-5 mb-2'>
                    {this.generateItem(0)}
                    {this.generateItem(1)}
                    {this.generateItem(2)}
                    {this.generateItem(3)}
                    {this.generateItem(4)}
                </div>
            </div>
        )
    }
}

export default TopStreams;
