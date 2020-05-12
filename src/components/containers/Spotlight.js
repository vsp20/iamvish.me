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
        opacity:1
    }
    .focus:hover{
        
    }
    
    `


const ActiveContext = React.createContext(true);


export const SpotlightContainer = ({ children }) => {
    const [active, setActive] = useState(true);
    let circleSize = 30;
    const killSpotlight = () => {
        setActive(false);
    }
    return (
        <ActiveContext.Provider value={active}>
            <StyledContainer>
                <SpotlightLander killSpotlight={killSpotlight} circleSize={circleSize} />
            </StyledContainer>
        </ActiveContext.Provider>
    );
};

//need to conditionally render the focus and spotlight class? Need to be able to remove the css for it and keep the background image 
export const SpotlightLander = ({ killSpotlight, circleSize }) => {
    const active = useContext(ActiveContext);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    const { x, y } = mousePosition
    const focusRef = React.createRef(null);

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    useEffect(() => {
        if ((x > 570 && x < 690) && (y < 700 && y > 590)) {
            // if (active) {
            //     let interval = setInterval(() => {
            //         focusRef.current.style.background = "radial-gradient(circle at " + x + "px " + y + "px, transparent, #000 " + circleSize + "%)";
            //         circleSize = circleSize - 5;
            //         console.log("circle Size: " + circleSize);
            //         if (circleSize == 0) {
            //             clearInterval(interval);
            //         }
            //     }, 500)
            // }

            killSpotlight();

        }

    }, [x, y, circleSize])

    console.log("x: " + x + " y: " + y)
    const style = {
        background: "radial-gradient(circle at " + x + "px " + y + "px, transparent, #000 " + circleSize + "%)",
        transition: "background transition"
    }
    return (
        <LanderContainer>
            {active &&
                <div className="focus" style={style} ref={focusRef}>
                </div>
            }

        </LanderContainer>
    );
};
