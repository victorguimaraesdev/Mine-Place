import styled from "styled-components";

export const Container = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ImgBanner = styled.div`
  img {
    height: 700px;
    width: 700px;
  }
`;

export const Text = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  gap: 5px;
  height: 300px;
  width: 800px;
  color: var(--gold);
  border-radius: 20px;
  h1 {
    font-size: 50px;
    font-family: "Pixelify Sans", serif;
  }
  p {
    color: var(--secundary);

    width: 600px;
  }
  button {
    font-family: "Pixelify Sans", serif;
    transition: 0.5s;
    font-size: 19px;
    margin-top: 20px;
    height: 50px;
    width: 200px;
    background-color: var(--secundary);
    color: #d3d3d3;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      background-color: rgb(33, 151, 147);
    }
  }
`;
