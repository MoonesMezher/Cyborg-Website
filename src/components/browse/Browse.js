import React, { Component } from 'react'
import { Header, Container, Footer} from '../index';
import Landing from './landing/Landing'
import LiveStream from './live stream/LiveStream';
import PopularStream from './popular stream/PopularStream';

class Browse extends Component {
    render() {
        return (
            <main className='browse'>
                <Header/>
                <Container>
                    <Landing />
                    <LiveStream />
                    <PopularStream />
                </Container>
                <Footer/>
            </main>
        )
    }
}

export default Browse;