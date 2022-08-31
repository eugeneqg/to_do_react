import React, { useState, useEffect } from "react";
import "./makePost.css";

const MakePost = (props) => {

    const [text, setText] = useState("")


    const onChange = (e) => {
        setText(e.target.value);
        }

    useEffect(() => {
        document.querySelector(".post-input").addEventListener("change", onChange);
    })

    
    const onSubmit = (e) => {
        e.preventDefault();
         if (text.length > 0) {
            props.onAdd(text);
            } else {
            setText("");
            }
        setText("");
    }

            


        
        return(
            <form onSubmit={onSubmit} className="container">
            <input onChange={onChange} className="post-input" type="text" placeholder="What do you want to do?" value={text}></input>
            <button className="post-button">Send</button>
            </form>
        )
    }

    export default MakePost;


// import React, { Component } from "react";
// import "./makePost.css";

// export default class MakePost extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: ""
//         }

//         this.onChange = (e) => {
//             this.setState(() => {
//                 return {
//                     text: e.target.value
//                 }
//             })
//         }

//         this.onSubmit = (e) => {
//             e.preventDefault();

//             if (this.state.text.length > 0) {
//                 this.props.onAdd(this.state.text);
//             } else {
//                 return this.state.text = "";
//             }

//             this.state.text = "";


            
//         }
//     }

//     render() {
        
//         return(
//             <form onSubmit={this.onSubmit} className="container">
//             <input onChange={this.onChange} className="post-input" type="text" placeholder="What do you want to do?" value={this.state.text}></input>
//             <button className="post-button">Send</button>
//             </form>
//         )
//     }


// }
