import React, { Component } from 'react'

class Box extends Component {
    render() {
        return (
            <div className='box p-4 rounded-5 col-12 pointer tr-1'>
                <img src={this.props.img} alt="service-img" className='rounded-5'/>
                <h4 className='text-white mt-3'>{this.props.title}</h4>
                <p className='text-secondryy mt-3'>{this.props.text}</p>
            </div>
        )
    }
}

export default Box;
