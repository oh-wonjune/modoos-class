// styles.ts
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`;

export const FormContainer = styled.div<{ signIn?: boolean; signUp?: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;

  ${({ signUp }) =>
    signUp &&
    css`
      opacity: 0;
      z-index: 1;
    `}

  ${({ signIn, signUp }) =>
    signIn &&
    !signUp &&
    css`
      transform: translateX(100%);
    `}
`;

export const OverlayContainer = styled.div<{ rightPanelActive?: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  ${({ rightPanelActive }) =>
    rightPanelActive &&
    css`
      transform: translateX(-100%);
    `}
`;

export const Overlay = styled.div<{ rightPanelActive?: boolean }>`
  background: #ff416c;
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  ${({ rightPanelActive }) =>
    rightPanelActive &&
    css`
      transform: translateX(50%);
    `}
`;

export const OverlayPanel = styled.div<{ right?: boolean; active?: boolean }>`
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

  ${({ right, active }) =>
    right
      ? css`
          right: 0;
          transform: translateX(${active ? "20%" : "0"});
        `
      : css`
          transform: translateX(${active ? "0" : "-20%"});
        `}
`;

export const SocialContainer = styled.div`
  margin: 20px 0;
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
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

  &.ghost {
    background-color: transparent;
    border-color: #ffffff;
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
  z-index: 10;
`;

export const SignInContainer = styled(FormContainer)`
  left: 0;
  opacity: 0;
  ${({ signIn }) =>
    signIn &&
    css`
      opacity: 1;
      z-index: 5;
    `}
`;

export const SignUpContainer = styled(FormContainer)`
  left: 0;
  opacity: 1;
  z-index: 2;
  ${({ signUp }) =>
    signUp &&
    css`
      opacity: 0;
      z-index: 1;
    `}
`;