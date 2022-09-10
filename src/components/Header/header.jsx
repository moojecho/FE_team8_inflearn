import React from "react";
import styled from "styled-components";

const Header = () =>{

    return(
        <HeaderLayout>
            <img style={{marginLeft:"55px",cursor:"pointer"}} src="img/infLogo.png"/>
            <Button>
                <LoginButton>로그인</LoginButton>
            <SignUpButton>회원가입</SignUpButton>
            </Button>
        </HeaderLayout>
    );


};

export default Header;

const HeaderLayout = styled.div`
min-width:769px;
width:100vw;
height:64px;
display: flex;
`;

const Button = styled.div`
display:flex;
item-align:center;
margin:auto;
margin-right:3vw;
`;

const LoginButton = styled.div`
height:35px;
margin-right:10px;
padding:6px;
border: 1px solid #dbdbdb;
border-radius:4px;
cursor: pointer;
`;

const SignUpButton = styled.div`
height:35px;
padding:6px;
border: 1px solid #dbdbdb;
border-radius:4px;
color:white;
background-color:#ff7867;
cursor: pointer;

&:hover{
    background-color:#ff6954;
}
`;





