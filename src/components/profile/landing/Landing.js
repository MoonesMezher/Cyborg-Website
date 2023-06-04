import React, { Component } from 'react'
import Info from './Info';
import Popular from './popular/Popular';

class Landing extends Component {
    render() {
        return (
            <section className='landing bg-darkAlt p-4 rounded-5 w-100'>
                <Info/>
                <Popular/>
            </section>
        )
    }
}

export default Landing;
