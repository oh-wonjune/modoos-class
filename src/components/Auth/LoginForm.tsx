import React, {useState, useEffect, useRef, FC} from "react";
import {
    Wrapper, Container, SignUpContainer, SignInContainer,
    StyledForm, SocialContainer, SocialIcon, StyledInput, StyledButton, GhostButton,
    OverlayContainer, Overlay, OverlayLeft, OverlayRight, Footer, FooterP, FooterIcon, FooterLink, ForgetButton
} from './styles';

const LoginForm: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const handleSignUpClick = () => {
        setIsActive(true)
    };

    const handleSignInClick = () => {
        setIsActive(false)
    };


    return (
        <Wrapper>
            <Container >

                <SignUpContainer active={isActive}>
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

                <SignInContainer active={isActive}>
                    {!isActive ?
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
                        :
                        <StyledForm action="#">
                        <h1 style={{fontWeight : "bold"}}>Create Account</h1>
                        <SocialContainer>
                            <SocialIcon href="#"><i className="fab fa-facebook-f" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-google-plus-g" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                            <SocialIcon href="#"><i className="fab fa-linkedin-in" style={{color:"black",fontSize:"14px"}}/></SocialIcon>
                        </SocialContainer>
                        <span>or use your email for registration</span>
                        <StyledInput type="Name" placeholder="Name"/>
                        <StyledInput type="email" placeholder="Email"/>
                        <StyledInput type="password" placeholder="Password"/>
                        <StyledButton>Sign Up</StyledButton>
                    </StyledForm>
                    }
                </SignInContainer>

                <OverlayContainer active={isActive}>
                    <Overlay active={isActive}>
                        <OverlayLeft active={isActive}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <GhostButton onClick={handleSignInClick}>Sign In</GhostButton>
                        </OverlayLeft>
                        <OverlayRight active={isActive}>
                            <h1>Hello, Friend!</h1>
                            <p >Enter your personal details and start journey with us</p>
                            <GhostButton onClick={handleSignUpClick}>Sign Up</GhostButton>
                        </OverlayRight>
                    </Overlay>
                </OverlayContainer>
            </Container>
        </Wrapper>
    );
};

export default LoginForm;
