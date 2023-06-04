import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import NavLink, {NavLinkProfile} from "./NavLink";
import {FaSearch} from 'react-icons/fa'
import {NavLink as Nlink} from 'react-router-dom';


window.onscroll = function() {
    if(window.scrollY<=100 && window.scrollY>=10) {
        document.querySelector(".header").style.cssText = "transition: 1s; box-shadow: 0 0 5px 1px white; background: white";
    } else {
        document.querySelector(".header").style.cssText = "transition: .5s; box-shadow: 0 0 5px 5px transparent; background: transparent";
    }
}
class Header extends Component {
    constructor() {
        super();
        this.navLinks = {
            name: ["home", "browse", "details", "streams", "profile"],
            link: ["/", "/browse", "/details", "/streams", "/profile"],
        }
        this.state = {
            menu : {
                clicked: false
            },
            inputIcon : {
                change: false
            }
        };
        this.handleClickMenu = this.handleClickMenu.bind(this); 
    }
    generateNavLink(i) {
        return <NavLink name={this.navLinks.name[i]} link={this.navLinks.link[i]}/>;
    }
    handleClickMenu() {
        this.setState({
            menu: {
                clicked: !this.state.menu.clicked,
            }
        });
    }
    handleChange = () => {
        const input = document.querySelector("input");
        this.setState({
            inputIcon: {
                change: input.value.length > 0?true:false
            }
        });
    }
    render() {
        return(
                <header className='header d-flex justify-content-center align-items-center'>
                    <div className='container d-flex justify-content-between align-items-center p-3'>
                        <div className='logo'>
                            <Nlink to="/" className="pointer">
                                <img src={logo} alt='logo'/>
                            </Nlink>
                        </div>
                        <form className='d-none d-lg-block'>
                            <div className='input d-flex position-relative'>
                                <span className={`icon ${this.state.inputIcon.change?"text-pink":"text-secondryy"} position-absolute`}>
                                    <FaSearch/>
                                </span>
                                <input type='text' className='py-2 ps-5 bg-greyAlt text-secondryy' placeholder='type something' onChange={this.handleChange}/>
                            </div>
                        </form>
                        <div className='nav'>
                            <div className={`menu position-relative pointer d-lg-none ${this.state.menu.clicked?"close":""}`} 
                            onClick={this.handleClickMenu}>
                                <span className='position-absolute bg-pink tr-1 top-0'></span>
                                <span className='position-absolute bg-pink tr-1'></span>
                                <span className='position-absolute bg-pink tr-1 bottom-0'></span>
                            </div>
                            <ul className={`d-none gap-3 gap-xl-5 m-0 d-lg-flex align-items-center z-3 ${this.state.menu.clicked?"show":""}`}>
                                {this.generateNavLink(0)}
                                {this.generateNavLink(1)}
                                {this.generateNavLink(2)}
                                {this.generateNavLink(3)}
                                <NavLinkProfile name={this.navLinks.name[4]} link={this.navLinks.link[4]} />
                            </ul>
                        </div>
                    </div>
                </header>
        );
    }
}

export default Header;