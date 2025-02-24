import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  gap: 15px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 300px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 150px;
  }
  h1 {
    font-family: "Pixelify Sans", serif;
    font-size: 30px;
  }
  p {
    font-family: "Pixelify Sans", serif;
    color: white;
  }
`;
