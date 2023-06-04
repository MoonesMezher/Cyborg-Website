import React, { Component } from 'react'
import LiveStreams from './LiveStreams'
import TopStreams from './top streams/TopStreams'

class Landing extends Component {
    render() {
        return (
            <section className='landing-streams d-flex justify-content-between gap-3 flex-wrap w-100'>
                <LiveStreams />
                <TopStreams />
            </section>
        )
    }
}

export default Landing;