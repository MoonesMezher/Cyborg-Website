import React, { Component } from 'react'
import Img1 from '../../assets/images/feature-left.jpg'
import Img2 from '../../assets/images/feature-right.jpg'
import {FaPlay} from 'react-icons/fa'

class Landing extends Component {
    render() {
        return (
            <section className='landing d-flex justify-content-center gap-3 w-100 flex-wrap'>
                <div className='feature-left col-12 col-lg-3'>
                    <img src={Img1} alt="details" className='rounded-5' />
                </div>
                <div className='feature-right position-relative col-12 col-lg-8'>
                    <img src={Img2} alt="details" className='rounded-5' />
                    <a href='https://youtu.be/kOUO6JD-qE4' target='_blank' className='pointer position-absolute left-half top-half rounded-5 bg-white d-flex justify-content-center align-items-center p-3'>
                        <FaPlay className='text-pink'/>
                    </a>
                </div>
            </section>
        )
    }
}

export default Landing;
