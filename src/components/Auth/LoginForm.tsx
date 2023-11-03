import React, {useState, useEffect, useRef, FC} from "react";
import {
    Wrapper, Container, SignUpContainer, SignInContainer,
    StyledForm, SocialContainer, SocialIcon, StyledInput, StyledButton, GhostButton,
    OverlayContainer, Overlay, OverlayLeft, OverlayRight, Footer, FooterP, FooterIcon, FooterLink, ForgetButton
} from './styles';

const LoginForm: FC = () => {

    return (
        <Wrapper>
            <Container>
                <SignUpContainer>
                    <StyledForm action="#">
                        <h1>Create Account</h1>
                        <SocialContainer>
                            <SocialIcon href="#"><i className="fab fa-facebook-f" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-google-plus-g" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-linkedin-in" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                        </SocialContainer>
                        <span>or use your email for registration</span>
                        <StyledInput type="text" placeholder="Name"/>
                        <StyledInput type="email" placeholder="Email"/>
                        <StyledInput type="password" placeholder="Password"/>
                        <StyledButton>Sign Up</StyledButton>
                    </StyledForm>
                </SignUpContainer>
                <SignInContainer>
                    <StyledForm action="#">
                        <h1 style={{fontWeight : "bold"}}>Sign in</h1>
                        <SocialContainer>
                            <SocialIcon href="#"><i className="fab fa-facebook-f" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-google-plus-g" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-linkedin-in" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                        </SocialContainer>
                        <span>or use your account</span>
                        <StyledInput type="email" placeholder="Email"/>
                        <StyledInput type="password" placeholder="Password"/>
                        <ForgetButton>Forgot your password?</ForgetButton>
                        <StyledButton>Sign In</StyledButton>
                    </StyledForm>
                </SignInContainer>
                <OverlayContainer>
                    <Overlay>
                        <OverlayLeft>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <GhostButton>Sign In</GhostButton>
                        </OverlayLeft>
                        <OverlayRight>
                            <h1>Hello, Friend!</h1>
                            <p >Enter your personal details and start journey with us</p>
                            <GhostButton>Sign Up</GhostButton>
                        </OverlayRight>
                    </Overlay>
                </OverlayContainer>
            </Container>
            <Footer>
                <FooterP>
                    Created with <FooterIcon className="fa fa-heart"/> by
                    <FooterLink target="_blank" href="#">Arun</FooterLink>
                    - Read how I created this and how you can join the challenge
                    <FooterLink target="_blank" href="#">here</FooterLink>.
                </FooterP>
            </Footer>
        </Wrapper>
    );
};

export default LoginForm;
