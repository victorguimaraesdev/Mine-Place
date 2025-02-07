import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 150px;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--secundary);
  /* border-bottom: 1px solid rgb(121, 124, 124); */
  border-bottom: 1px solid var(--gold);
`;
export const LogoImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 250px;
    height: 150px;
  }
`;
export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    li {
      cursor: pointer;
      a {
        &:hover {
          transition: 0.5s;
          color: var(--gold);
        }
      }
    }
  }
`;
