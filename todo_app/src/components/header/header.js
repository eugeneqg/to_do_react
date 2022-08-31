import React, { useState, useEffect } from "react";
import "./header.css"

const Header = (props) => {

    const [text, setText] = useState("");

    useEffect(() => {
        document.querySelector(".search").addEventListener("change", detectWord);
    })

    const detectWord = (e) => {
            let data = e.target.value;

            data = data.toLowerCase();

            setText(data)

            props.onSearch(data);
        }

        return (
            <div className="back">
            <header className="container">
                <div className="flex">
                    <span className="logo">mytodos</span>
                    <input onChange={detectWord} className="search" type="text" placeholder="Search"></input>
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
export default Header;