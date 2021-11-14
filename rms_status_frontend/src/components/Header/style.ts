import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  min-width: 800px;
  height: 51px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      > p {
        font-size: 15px;
        color: #707070;
        cursor: pointer;
      }
      > img {
        width: 13px;
        height: 13px;
        cursor: pointer;
      }
    }
  }
`;

export const Logo = styled.p`
  cursor: pointer;
  color: #386bee;
  font-size: 19px;
  font-weight: bold;
`;
