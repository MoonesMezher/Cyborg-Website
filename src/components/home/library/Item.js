import React, { Component } from 'react'

class Item extends Component {
    constructor() {
        super();
        this.state = {
            downloaded: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            downloaded: !this.state.downloaded
        });
    }
    render() {
        return (
            <div className='item d-flex flex-column gap-3'>
                <ul className='d-flex justify-content-between align-items-center p-3 flex-wrap gap-4'>
                    <li className='d-flex justify-content-center align-items-center'><img src={this.props.img} alt='library' className='rounded-5'/></li> 
                    <li className='d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <h4 className='text-white fs-6'>{this.props.name}</h4>
                        <span className='text-grey fs-6'>{this.props.band}</span>    
                    </li> 
                    <li className='d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <h4 className='text-white fs-6'>date added</h4>
                        <span className='text-grey fs-6'>{this.props.date}</span>    
                    </li> 
                    <li className='d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <h4 className='text-white fs-6'>hours played</h4>
                        <span className='text-grey fs-6'>{this.props.played}</span>    
                    </li> 
                    <li className='d-flex flex-column gap-1 justify-content-center align-items-center'>
                        <h4 className='text-white fs-6'>curently</h4>
                        <span className='text-grey fs-6'>{this.state.downloaded?"downloaded":"undownload"}</span>    
                    </li>
                    <li className='d-flex justify-content-center align-items-center'>
                        <span className={`btn download p-2 px-4 rounded-5 ${this.state.downloaded?"downloaded":""}`} onClick={this.handleClick}>
                            <a className='text-pink'>{this.state.downloaded?"undownload":"download"}</a>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Item;
