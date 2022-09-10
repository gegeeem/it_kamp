import React from "react";

const Greeeting = ({name, children, fontSize})=>{ //children rezervisani props
    // const {name, children} = props, drugi nacin za desktruktiriranje
    const stil = {
        fontSize: fontSize,
        color: 'blue'

    }
    return(
        <>
            <h3 style = {{color: 'purple'}}>Hello, {name}</h3>
            <p style={stil}>How are you?</p>
            {children}
        </>
        
    )
};
export default Greeeting;