import React, { Component } from "react";
import "./header.css"

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }

        this.detectWord = (e) => {
            const data = e.target.value;

            this.setState(() => {
                return {
                    text: data
                }
            })

            this.props.onSearch(data);
        }
    }

    render() {

        return (
            <div className="back">
            <header className="container">
                <div className="flex">
                    <span className="logo">mytodos</span>
                    <input onChange={this.detectWord} className="search" type="text" placeholder="Search"></input>
                </div>
                <div className="banner-text">All todos right at your hand</div>
                <button onClick={ () => {
                    const anchor = document.querySelector('.post-input')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }} className="banner-button"
                >Let's go</button>
            </header>
    
            </div>
        )

    }

}