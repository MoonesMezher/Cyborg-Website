import React, { Component } from 'react'
import Library from './library/Library';
import Landing from './Landing';
import Popular from './popular/Popular';
import { Header, Footer, Container} from '../index'

class Home extends Component {
    render() {
        return (
            <main className='home'>
                <Header />
                <Container>
                    <Landing />
                    <Popular />
                    <Library />
                </Container>
                <Footer />
            </main>
        )
    }
}

export default Home;