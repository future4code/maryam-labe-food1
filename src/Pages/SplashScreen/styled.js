import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #e86e5a;
  z-index: 2;
`;

export const LogoCenter = styled.img`
  width: 126px;
  height: 65px;
  margin-bottom: 20px;
`;
export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: white;
`;
