import React, { Component } from 'react'
import Header from '../header/Header';
import Container from '../container/Container';
import Footer from '../footer/Footer';
import Landing from './Landing';
import FortniteDetails from './FortniteDetails';
import Games from './Games';

class Details extends Component {
    render() {
        return (
            <main className='details'>
                <Header />
                <Container>
                    <Landing />
                    <FortniteDetails />
                    <Games />
                </Container>
                <Footer />
            </main>
        )
    }
}

export default Details;
