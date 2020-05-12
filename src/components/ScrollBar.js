import React, { useLayoutEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const frames = keyframes`
    0% {
        filter: hue-rotate(0deg)
    }
    50%{
        filter: hue-rotate(360deg)
    }
    100%{
        filter: hue-rotate(0deg)
    }
`

const Container = styled.div`
    margin: 0;
    padding:0;
    font-family: consolas;
    
    ::-webkit-scrollbar{
        width:0;
            background: transparent; /* make scrollbar transparent */

    }
    .scrollPath{
        position: fixed;
        top: 0;
        right:0;
        width: 10px;
        height: 100%;
        background:rgba(255,255,0,0.05);

    }
    .progressBar{
        position: fixed;
        top: 0;
        right:0;
        width: 10px;   
        background: linear-gradient(to top, #008aff, #00ffe7);
        animation: ${frames} 5s linear infinite;

    }
    .progressBar:before{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        background: linear-gradient(to top, #008aff, #00ffe7);
        filter: blur(30px);
    }
    .progressBar:after{
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        background: linear-gradient(to top, #008aff, #00ffe7);
        filter: blur(10px);
    }
`



const ScrollBar = ({ children }) => {
    let style = {}
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const getDocHeight = () => {
            return Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
        }
        const calculateScrollDistance = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = getDocHeight();
            const totalDocScrollLength = docHeight - windowHeight;
            return Math.floor(scrollTop / totalDocScrollLength * 100)
        }
        const onScroll = () => {
            const scrollPercent = calculateScrollDistance();
            setHeight(scrollPercent);
            console.log(height);
        }
        window.addEventListener("scroll", onScroll);
    }, [height]

    )
    return (
        <Container>
            <div className="progressBar" style={{ height: height + "%" }} />
            <div className="scrollPath" />
            {children}
        </Container>
    );
};

export default ScrollBar;