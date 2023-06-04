import React, { Component } from 'react'

class MainTitle extends Component {
    render() {
        return (
            <div className='main-title mb-4'>
                <h2 className='fw-bold'><u className='text-white'>{this.props.children}</u><span className='text-pink'> {this.props.first}</span> </h2>
            </div>
        )
    }
}

export default MainTitle;
