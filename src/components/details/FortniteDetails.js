import React, { Component } from 'react'
import {FaStar,FaDownload,FaGamepad,FaDatabase} from 'react-icons/fa'
import Img1 from '../../assets/images/details-01.jpg'
import Img2 from '../../assets/images/details-02.jpg'
import Img3 from '../../assets/images/details-03.jpg'
import Btn from '../container/Btn'

class FortniteDetails extends Component {
    render() {
        return (
            <section className='fortnite-details w-100'>
                <h1 className='title text-white text-uppercase fw-bold mx-auto'>Fortnite Details</h1>
                <div className='wrraper d-flex gap-4 bg-darkAlt rounded-5 p-4 w-100 mt-5 flex-column'>
                    <div className='row-1 d-flex justify-content-between gap-4 col-12'>
                        <div className='item rounded-4 bg-greyAlt p-4'>
                            <div className='d-flex justify-content-between'>
                                <span className='text-white fw-bold mb-1'>fortnite</span>
                                <span className='text-white d-flex align-items-center gap-1'><FaStar className='text-yellow'/> 4.8</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span className='text-secondryy'>sandbox</span>
                                <span className='text-white d-flex align-items-center gap-1'><FaDownload className='text-pink'/> 2.3M</span>
                            </div>
                        </div>
                        <div className='item rounded-4 bg-greyAlt p-4 d-flex gap-3 justify-content-evenly'>
                            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                <FaStar className='text-yellow'/> 
                                <span className='text-white'>4.8</span>
                            </div>
                            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                <FaDownload className='text-pink'/> 
                                <span className='text-white'>2.3M</span>
                            </div>
                            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                <FaDatabase className='text-pink'/> 
                                <span className='text-white'>36GB</span>
                            </div>
                            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                                <FaGamepad className='text-pink'/> 
                                <span className='text-white'>action</span>
                            </div>
                        </div>
                    </div>
                    <div className='row-2 d-flex justify-content-center gap-4 col-12 flex-wrap'>
                        <div className="img">
                            <img src={Img1} alt="details" className='rounded-5'/>
                        </div>
                        <div className="img">
                            <img src={Img2} alt="details" className='rounded-5'/>
                        </div>
                        <div className="img">
                            <img src={Img3} alt="details" className='rounded-5'/>
                        </div>
                    </div>
                    <p className='text-secondryy lh-lg'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span className='text-white'>small contribution via PayPal</span> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor</p>
                <Btn name="download fortnite now" link='https://www.epicgames.com/fortnite/en-US/home' target="_blank"/>
                </div>
            </section>
        )
    }
}

export default FortniteDetails;
