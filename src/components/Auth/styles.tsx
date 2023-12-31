import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

export const Container = styled.div<{ active: boolean }>`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  
  ${props => props.active && `
    position: relative;
    width: 25px;
    height: 25px;
    margin-top: 1rem;
  `}
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;

export const SignUpContainer = styled(FormContainer)<{ active: boolean }>`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  transform: ${props => props.active ? 'translateX(100%)' : 'none'};
  transition: all 0.6s ease-in-out;
`;

export const SignInContainer = styled(FormContainer)<{ active: boolean }>`
  left: 0;
  width: 50%;
  z-index: 2;
  transform: ${props => props.active ? 'translateX(100%)' : 'none'};
  transition: all 0.6s ease-in-out;
`;

export const StyledForm = styled.form`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const SocialContainer = styled.div`
  margin: 20px 0;
`;

export const SocialIcon = styled.a`
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  text-decoration: none;
`;

export const StyledInput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(StyledButton)`
  background-color: transparent;
  border-color: #FFFFFF;
`;

export const OverlayContainer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  transform: ${props => props.active ? 'translateX(-100%)' : 'none'};
`;

export const Overlay = styled.div<{ active: boolean }>`
  background: linear-gradient(to right, #FF4B2B, #FF416C);
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: ${props => props.active ? 'translateX(50%)' : 'translateX(0)'};
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayLeft = styled(OverlayPanel)<{ active: boolean }>`
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(-20%)'};
  transition: transform 0.6s ease-in-out;
  
   h1{
        font-weight:bold;
        margin:0;
  }
  
  p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }
`;

export const OverlayRight = styled(OverlayPanel)<{ active: boolean }>`
  right: 0;
  transform: ${props => props.active ? 'translateX(20%)' : 'translateX(0)'};
  transition: transform 0.6s ease-in-out;
  
  h1{
        font-weight:bold;
        margin:0;
  }
  
  p {
        font-size: 14px;
        font-weight: 100;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
    }

`;

export const Footer = styled.footer`
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
`;

export const FooterP = styled.p`
  margin: 10px 0;
`;

export const FooterIcon = styled.i`
  color: red;
`;

export const FooterLink = styled.a`
  color: #3c97bf;
  text-decoration: none;
`;

export const ForgetButton = styled.button`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0; 
  background: none;
  border: none;
`;