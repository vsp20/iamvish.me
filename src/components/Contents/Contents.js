//Table of Contents Section of the site
import React from 'react';
import styled from 'styled-components';
import img from "../../images/test_picture.jpg";
import classNames from 'classnames';


const Container = styled.div`
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Poppins", sans-serif;
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
min-height:100vh;
background-attachment: fixed;
`
const CardContainer = styled.div`
.box{
    position: relative;
    width: 300px;
    height: 300px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 40px;
    transition: 0.5s;
}
.box:hover{
    height:400px;
}
.box .imgBox{ 
    position: absolute;
    top: 0;
    left:0;
    width:100%;
    height:100%;
    padding:10px;
    box-sizing: border-box;
}
.box .imgBox img{
    max-width:100%;
    opacity:0.1;
    transition: 0.5s;
}
.box:hover .imgBox img{ 
    opacity:1;
}
.box:before{
    content:'';
    position: absolute;
    top:-2px;
    left:-2px;
    right:-2px;
    bottom: -2px;
    z-index:-1;
    background:#fff;
}
.box:after{
    content:'';
    position: absolute;
    top:-2px;
    left:-2px;
    right:-2px;
    bottom: -2px;
    z-index:-2;
    filter:blur(40px);
}
.box.one:before,
.box.one:after{
    background: linear-gradient(235deg,#89ff00,#010615,#00bcd4);
}
.box.two:before,
.box.two:after{
    background: linear-gradient(235deg,#ff005e,#010615,#fbff00);
}
.box.three:before,
.box.three:after{
    background: linear-gradient(235deg,#772aff,#010615,#2196f3);
}
.box .content{
    position: absolute;
    bottom:0;
    left:10px;
    right:10px; 
    height:90px;
    background: rbga(0,0,0,0.4);
    display:flex;
    justify-content:center;
    align-items: center;
    opacity:0;
    transition:0.5s;
    text-align:center;
}
.box:hover .content{
    opacity: 1;

}
.box:hover .content h2{
    font-size:20px;
    color: #fff;
    font-weight:500;
    line-height:20px;
    letter-spacing:1px;
}
.box .content h2 span{
    font-size:14px;
    color: #fff;
    font-weight:200;
    letter-spacing:2px;
}


`
const Contents = () => {
    return (
        <Container>
            <Card header="About" number="one" />
            <Card header="Project" number="two" />
            <Card header="Contact Me" number="three" />
        </Container>
    );
};
const Card = ({ header, number }) => {
    return (
        <CardContainer>
            <div className={classNames("box", number)}>
                <div className="imgBox">
                    <img src={img}></img>
                </div>
                <div className="content">
                    <h2>{header}</h2>
                </div>
            </div>
        </CardContainer>
    )
}

export default Contents;