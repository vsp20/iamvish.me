import React, { useLayoutEffect, useState } from 'react';
import styled from "styled-components";
import background from "../../images/mainBackground.jpg";
import layer1 from "../../images/mountain1.png";
import layer2 from "../../images/mountain2.png";
import text from "../../images/text.png";


const Container = styled.div`
margin:0;
padding:0;
.zoom{
    width:100%;
    height:1000px;
    position: relative;
    overflow:hidden;
    background: url(${background});
    background-size:cover;
    }
.zoom:before {
    content:'';
    position:absolute;
    bottom:0;
    width:100%;
    height: 200px;
    z-index:1000;
    background: linear-gradient(transparent,#303030	);
}
.zoom .layer1{
    position:absolute;
    left:40%;
    width:100%;
    transform: translateX(-50%);
    z-index:10;
}
.zoom .layer2{
    position:absolute;
    right:0;
    width:100%;
    z-index:9; 
}
.zoom .text{
    position:absolute;
    right:0;
    width:100%;
    transform:translateY(50%);
}

`

const Lander = () => {
    const [layerOffset, setLayerOffset] = useState(window.pageYOffset);

    useLayoutEffect(() => {
        const onScroll = () => {
            setLayerOffset(window.pageYOffset);
        }
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);

        }
    }, [layerOffset]);
    return (
        <Container>
            <section className="zoom">
                <img src={layer1} className="layer1" style={{ width: 100 + layerOffset / 5 + "%", right: layerOffset / 50 }} />
                <img src={layer2} className="layer2" style={{ width: 100 + layerOffset / 5 + "%", left: layerOffset / 50 }} />
                <img src={text} className="text" style={{ top: - layerOffset / 20 + "%" }} />
            </section>
        </Container>
    );
};

export default Lander;