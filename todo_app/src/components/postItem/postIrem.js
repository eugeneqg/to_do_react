import React, { Component } from "react";
import "./postItem.css"

export default class PostItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkbox: false,

            classes: "post"
        }
    }

    render() {

        const {label, important, onToggleImportant, onChecked, check} = this.props;


        let classes = "post";

        if (important) {
            classes = classes + " important-item";
        }

        if (check) {

            classes = classes + " deactivated";
        }

        // if (important && check) {
        //     classes = "post deactivated";
        // }

        const checked = (e) => {
            if (e.target.checked) {
                onChecked();
            } 
            else {
                onChecked();
            }
        }

        return(
            <div className="container">
                <div className={classes}>
                    <input defaultChecked={check} onChange={checked} className="checkbox" type="checkbox"/>
                    <span onClick={onToggleImportant} className="post-text">{label}</span>
                </div>
            </div>
        )
    }


}
