import React, { Component } from 'react'
import Library from '../home/library/Library';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import Landing from './landing/Landing';

class Profile extends Component {
    render() {
        return (
            <main className='profile'>
                <Header />
                <Container>
                    <Landing/>
                    <Library />
                </Container>
                <Footer />
            </main>
        )
    }
}

export default Profile;
