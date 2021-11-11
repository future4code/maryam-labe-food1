import styled from "styled-components";
import { paleLilac } from "../../Constants/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3vh;
  max-height: 100vh;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #b8b8b8;
  width: 100%;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
`;

export const TextP = styled.p`
  font-weight: 500;
  padding: 0 16px;
`;
export const TextAdressTitle = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
  padding: 0 15px;
  color: #b8b8b8;
`;

export const TextBorder = styled.p`
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 5px;
`;
export const Border = styled.div`
  border-bottom: 1px solid black;
  width: 90%;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
`;

export const CardOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18rem;
  height: 6.375rem;
  margin: 0.438rem 0 0;
  padding: 1rem;
  border-radius: 8px;
  border: solid 1px grey;
`;

export const Name = styled.p`
  color: red;
`;

export const Date = styled.p`
  font-size: 12px;
`;

export const Price = styled.p`
  width: 296px;
  height: 18px;
  margin: 7px 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`;

export const ContainerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 15%;
  grid-gap: 0;
  width: 100%;
  margin-top: 15px;
`;
export const ContainerAdress = styled.div`
  display: grid;
  grid-template-columns: 1fr 15%;
  grid-gap: 0;
  width: 100%;
  padding: 15px 0;
  background-color: ${paleLilac};
`;

export const EditButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: inline-block;
  padding-right: 16px;
`;
