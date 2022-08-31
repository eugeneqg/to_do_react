import React from "react";

const Service = () => {
    const getData = async () => {
        const data =  await fetch("http://localhost:3000/posts");

        if (data.ok) {
            return await data.json();
        } else {
            throw new Error(`There was an error in ${data}`)
        }
    }
    
    const pushData = async (post) => {
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)

        })
    }
}

export default Service;