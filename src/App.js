import React, { Component } from 'react';
import { Home, Browse} from './components/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/details/Details';
import Streams from './components/streams/Streams';
import Profile from './components/profile/Profile';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path='browse' element={<Browse />}/>
                    <Route path='details' element={<Details />}/>
                    <Route path='streams' element={<Streams />}/>
                    <Route path='profile' element={<Profile />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;