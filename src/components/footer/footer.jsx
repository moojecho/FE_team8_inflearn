import React from "react";
import styled from "styled-components";

const Footer = () => {

  return (
    <FooterLayout>
      <InsideLayout>
        <TopText >
        <img style={{marginTop:"1px",width:"80px",height:"15px"}} src="img/logo1.png"/> 
        <Wall/>
        <FootText style={{fontWeight:"700"}}>개인정보취급방침</FootText>
        <Wall/>
        <FootText style={{fontWeight:"700"}}>이용약관</FootText>
        </TopText>
        <BottomText>
        <FootText>이노베이션캠프(주)</FootText>
        <Wall/>
        <FootText>팀장: 이다정</FootText>
        </BottomText>
        <FootText style={{marginLeft:"83px"}}>주소: 게더타운 8조 테이블</FootText>
      </InsideLayout>
      </FooterLayout>
  )
};

export default Footer;

const FooterLayout = styled.div`
width:100%;
height:200px;
border:none;
background-color:#303740;
display: flex;
flex-direction:column;
`;

const InsideLayout = styled.div`
width:1200px;
height:200px;
margin:auto;
display:flex;
flex-direction:column;
`;

const TopText = styled.div`
width:500px;
display:flex;
flex-direction:row;
margin-top:60px;
margin-left:80px;
`;

const Wall = styled.div`
    color: #bdbdbd;
    margin-top:5px;
    margin-left:12px;
    width: 1px;
    height: 12px;
    background-color: gray;
`;

const FootText = styled.p`
margin-top:2px;
    margin-left:12px;
font-size: 12px;
    color: #bdbdbd;
    line-height: 1.5;
`;

const BottomText = styled.div`
width:300px;
display:flex;
flex-direction:row;
margin-top:10px;
margin-left:70px;
`;

