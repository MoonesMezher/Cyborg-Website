import React, { Component } from 'react'
import Featured from './featured/Featured'
import TopDownload from './topdownload/TopDownload'

class Landing extends Component {
    render() {
        return (
            <section className='landing-browse d-flex justify-content-between gap-3 flex-wrap w-100'>
                <Featured />
                <TopDownload />
            </section>
        )
    }
}

export default Landing;
