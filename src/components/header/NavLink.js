import React, { Component } from 'react'
import profileHeader from '../../assets/images/profile-header.jpg'; 
import { NavLink as NLink } from 'react-router-dom'

class NavLink extends Component {
    render() {
        return (
            <NLink to={this.props.link} className={this.props.active}><span className='text-secondryy fs-rg1 tr-1'>{this.props.name}</span></NLink>
        )
    }
}

class NavLinkProfile extends Component {
    render() {
        return (
            <NLink to={this.props.link} className={`p-2 m-0 d-flex justify-content-center align-items-center tr-1 bg-greyAlt ${this.props.active}`}>
                <span className='text-secondryy fs-rg1 tr-1 me-3'>{this.props.name}</span>
                <img src={profileHeader} alt='profile' className='rounded-5'/>
            </NLink>
        )
    }
}

export default NavLink;
export {NavLinkProfile};
