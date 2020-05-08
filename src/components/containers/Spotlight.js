import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import img from "../../images/test_picture.jpg"


const StyledContainer = styled.div`
    margin:0;
    padding:0;
    `
const LanderContainer = styled.div`
    position: relative;
    width:100%;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    .focus{
        position: absolute;
        width: 100%;
        height:100%;
    }
    `

const ActiveContext = React.createContext(true);


export const SpotlightContainer = ({ children }) => {
    const [active, setActive] = useState(true);
    const killSpotlight = () => {
        setActive(false);
    }
    return (
        <ActiveContext.Provider value={active}>
            <StyledContainer action={killSpotlight}>
                {children}
            </StyledContainer>
        </ActiveContext.Provider>
    );
};

//need to conditionally render the focus and spotlight class? Need to be able to remove the css for it and keep the background image 
export const SpotlightLander = ({ killSpotlight }) => {
    const active = useContext(ActiveContext);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    const { x, y } = mousePosition
    console.log("x: " + x + " y: " + y)
    //x= 630 y = 656
    //y low = 550
    //y high = 715
    //x l= 615 h=760
    if ((x > 615 && x < 760) && (y < 714 && y > 550)) {
        console.log("killing spotlight");
        //killSpotlight();
    }
    const style = {
        background: "radial-gradient(circle at " + x + "px " + y + "px, transparent, #000 30%)"
    }
    return (
        <LanderContainer>
            {active &&
                <div className="focus" style={style}></div>
            }
        </LanderContainer>
    );
};
