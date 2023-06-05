import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}

  @media (max-width: 768px) {
    top: 50%;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateY(0);
    ${(props) =>
      props.signinIn !== true ? `transform: translateY(-100%);` : null}
  }
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #9969c4, #4e5db6);
  background: linear-gradient(to right, #9969c4, #4e5db6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}

  @media (max-width: 768px) {
    background: -webkit-linear-gradient(to top, #9969c4, #4e5db6);
    background: linear-gradient(to top, #9969c4, #4e5db6);
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateY(0);
    ${(props) =>
      props.signinIn !== true ? `transform: translateY(50%);` : null}
  }
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

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    transform: translateY(0);
  }
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}

  @media (max-width: 768px) {
    transform: translateY(-120%);
    ${(props) =>
      props.signinIn !== true ? `transform: translateY(0%);` : null}
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}

  @media (max-width: 768px) {
    transform: translateY(0%);
    ${(props) =>
      props.signinIn !== true ? `transform: translateY(120%);` : null}
  }
`;
