import React, { Component } from 'react';
import Btn from '../container/Btn'

class Landing extends Component {
    constructor() {
        super();
        this.text = {
            h4: 'welocme to cyborg',
            p: 'our popular games here'
        };
    }
    render() {
        return(
                <section className='landing w-100 p-5 rounded-5 d-flex justify-content-center align-items-center d-md-block'>
                    <div className='title text-center text-md-start'>
                        <h4 className='text-white fs-md-2 mb-3'>{this.text.h4}</h4>
                        <p className='text-uppercase text-white fs-1 fw-bolder line-hieght-1-3'>
                            <span className='text-pink text-uppercase'>browse </span>{this.text.p}
                        </p>
                        <Btn name="browse now" link="/browse" />
                    </div>
                </section>
        );
    }
}

export default Landing;