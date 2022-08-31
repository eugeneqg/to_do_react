import React from "react";
import PostItem from "../postItem/postIrem";
import "./postList.css"

const PostList = (props) => {

    const filter = [
        {name: "all", label: "All todos"},
        {name: "important", label: "Important"}];

        const {posts, onToggleImportant, total, onChecked, onFilter, filterState} = props;


        const elements = posts.map(item => {
            return (
                <li key={item.id} className="post-item">
                     <PostItem label={item.label} important={item.important} total={total} check={item.check} onToggleImportant={() => onToggleImportant(item.id)} onChecked={() => onChecked(item.id)}/>
                </li>
            )
        })

        const buttons = filter.map(button => {
            return (
                <div 
                onClick={() => onFilter(button.name)} 
                key={button.name} 
                className={button.name === filterState ? "all-todos active" : "all-todos"}
                >{button.label}</div>
            )
        })


        return(
            <div className="container">
                <span className="waiting-todos">Pending tasks: {total}</span>
                <div className="flex-box">
                    <div className="left-part">
                        {elements}
                    </div>
                    <div className="right-part">
                        <div className="filters">
                            <div className="slider-container">
                                <div className="slider">
                                    <div className={filterState === filter[0].name ? "active-slider" : "active-slider position"}></div>
                                </div>
                            </div>
                            <div className="filter-container">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default PostList;

// import React, { Component } from "react";
// import PostItem from "../postItem/postIrem";
// import "./postList.css"

// export default class PostList extends Component {
//     constructor(props) {
//         super(props);

//         this.filter = [
//             {name: "all", label: "All todos"},
//             {name: "important", label: "Important"}
//         ];

//     }
    
//     render() {

//         const {posts, onToggleImportant, total, onChecked, onFilter, filterState} = this.props;


//         const elements = posts.map(item => {
//             return (
//                 <li key={item.id} className="post-item">
//                      <PostItem label={item.label} important={item.important} total={total} check={item.check} onToggleImportant={() => onToggleImportant(item.id)} onChecked={() => onChecked(item.id)}/>
//                 </li>
//             )
//         })

//         const buttons = this.filter.map(button => {
//             return (
//                 <div 
//                 onClick={() => onFilter(button.name)} 
//                 key={button.name} 
//                 className={button.name === filterState ? "all-todos active" : "all-todos"}
//                 >{button.label}</div>
//             )
//         })


//         return(
//             <div className="container">
//                 <span className="waiting-todos">Pending tasks: {total}</span>
//                 <div className="flex-box">
//                     <div className="left-part">
//                         {elements}
//                     </div>
//                     <div className="right-part">
//                         <div className="filters">
//                             <div className="slider-container">
//                                 <div className="slider">
//                                     <div className={filterState === this.filter[0].name ? "active-slider" : "active-slider position"}></div>
//                                 </div>
//                             </div>
//                             <div className="filter-container">
//                                 {buttons}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }