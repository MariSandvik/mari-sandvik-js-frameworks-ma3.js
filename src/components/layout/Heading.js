import React from "react";

function Heading(props) {
    const subtitle = "This is the subtitle";
    
    console.log(props)
    
    return (
        <>
        <h1>{props.title}</h1>
        <h2>{subtitle}</h2>
        
        </>
    );

}

export default Heading;