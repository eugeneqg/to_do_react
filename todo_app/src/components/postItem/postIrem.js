import React from "react";
import "./postItem.css";

const PostItem = (props) => {

    let classes = "post"


        const {label, important, onToggleImportant, onChecked, check} = props;


            if (important) {
               classes = classes + " important-item";
            }
    
            if (check) {
    
                classes = classes + " deactivated";
            }


        const checked = (e) => {
            if (e.target.checked) {
                onChecked();
            } 
            else {
                onChecked();
            }
        }

        return(
                <div className={classes}>
                    <input defaultChecked={check} onChange={checked} className="checkbox" type="checkbox"/>
                    <span onClick={onToggleImportant} className="post-text">{label}</span>
                </div>
        )

}

export default PostItem;


// const PostItem = (props) => {

//     constructor(props) {
//         super(props);

//         this.state = {
//             checkbox: false,

//             classes: "post"
//         }
//     }


//         const {label, important, onToggleImportant, onChecked, check} = this.props;


//         let classes = "post";

//         if (important) {
//             classes = classes + " important-item";
//         }

//         if (check) {

//             classes = classes + " deactivated";
//         }

//         // if (important && check) {
//         //     classes = "post deactivated";
//         // }

//         const checked = (e) => {
//             if (e.target.checked) {
//                 onChecked();
//             } 
//             else {
//                 onChecked();
//             }
//         }

//         return(
//             <div className="container">
//                 <div className={classes}>
//                     <input defaultChecked={check} onChange={checked} className="checkbox" type="checkbox"/>
//                     <span onClick={onToggleImportant} className="post-text">{label}</span>
//                 </div>
//             </div>
//         )

// }

// export default PostItem;
