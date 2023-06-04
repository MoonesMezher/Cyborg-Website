import React, { Component } from 'react'
import Header from '../header/Header';
import Container from '../container/Container';
import Footer from '../footer/Footer';
import Landing from './landing/Landing';
import Popular from './popular/Popular'

class Streams extends Component {
    render() {
        return (
            <main className='streams'>
                <Header/>
                <Container>
                    <Landing/>
                    <Popular/>
                </Container>
                <Footer/>
            </main>
        )
    }
}

export default Streams;
